import { writable, readonly, derived, type Writable, type Readable, get } from "svelte/store";
import { actionSteps } from "./features/simulation/condition/const";
import { merge } from "ts-deepmerge";
import { AES } from "crypto-ts";

export function storable<T>(value: T) {
	const store: Writable<T> = writable(value);
	const { subscribe, set, update } = store;
	const isBrowser = typeof window !== 'undefined';

	isBrowser && localStorage.granulo &&
		set(JSON.parse(localStorage.granulo));

	return {
		subscribe,
		set: (n: T) => {
			set(n);
			isBrowser && (localStorage.granulo = JSON.stringify(n));
		},
		update: (callback: (n: T) => T) => {
			update(callback);
			const updatedStore = get(store);
			isBrowser && (localStorage.granulo = JSON.stringify(updatedStore));
		}
	}
}

export const conditionsState = storable<ActionSetting>({
	force: {},
	particle: {},
	solid: {},
})

export const readableSettingState = readonly(conditionsState);
export const derivedNumbering = derived(conditionsState, ($conditionState) => {
	const merged = merge($conditionState, { now: Date.now() });
	const hash = AES.encrypt(JSON.stringify(merged), 'granulo-ui-hash').toString().replaceAll("/","a").replaceAll("?","a")
	let numbering = ''
	for (let i = 0; i < 30; i++) {
		numbering = numbering.concat(hash[Math.floor(Math.random() * hash.length)])
	}
	return numbering
})

conditionsState.subscribe(console.log);
readableSettingState.subscribe(console.log);

export const actionLinkedId: Readable<Record<string, ActionType>> = derived(conditionsState, ($conditionState) => {
	return {
		...Object.keys($conditionState['force']).reduce((pre, cur) => ({ ...pre, [cur]: 'force' }),{}),
		...Object.keys($conditionState['particle']).reduce((pre, cur) => ({ ...pre, [cur]: 'particle' }),{}),
		...Object.keys($conditionState['solid']).reduce((pre, cur) => ({ ...pre, [cur]: 'solid' }),{}),
	}
})

export const getStepStatus = derived(conditionsState, ($conditionState) => {
	return (action: ActionType | undefined, id: string) => {
		if (!action) {
			return {
				step: "step1",
				steps: actionSteps["default"],
				nowStepIdx: 0,
				progressStepIdx: 0,
			}
		}
		const step = $conditionState[action][id]?.status.now ?? "step1";
		const steps = actionSteps[$conditionState[action][id]?.type ?? "default"];
		const nowStepIdx = steps.reduce((pre, cur, i) => step === cur ? i : pre, -1);
		const progressStep = $conditionState[action][id]?.status.progress ?? "step1";
		const progressStepIdx = steps.reduce((pre, cur, i) => progressStep === cur ? i : pre, -1);
		return {
			step: step,
			steps: steps,
			nowStepIdx: nowStepIdx,
			progressStepIdx: progressStepIdx,
		}
	}
});