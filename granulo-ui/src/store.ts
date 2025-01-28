import { writable, readonly, derived, type Writable, type Readable } from "svelte/store";
import { actionSteps, convertStep, defaulActiontValue } from "./features/simulation/condition/const";

export const settingsState: Writable<ActionSetting> = writable({
	particle: {},
	force: {},
	solid: {}
});
export const readableSettingState = readonly(settingsState);

settingsState.subscribe(console.log);
readableSettingState.subscribe(console.log);

export const actionLinkedId: Readable<Record<string, ActionType>> = derived(settingsState, ($settingState) => {
	return {
		...Object.keys($settingState['force']).reduce((pre, cur) => ({ ...pre, [cur]: 'force' }),{}),
		...Object.keys($settingState['particle']).reduce((pre, cur) => ({ ...pre, [cur]: 'particle' }),{}),
		...Object.keys($settingState['solid']).reduce((pre, cur) => ({ ...pre, [cur]: 'solid' }),{}),
	}
})

export const getStepStatus = derived(settingsState, ($settingState) => {
	return (action: ActionType | undefined, id: string) => {
		if (!action) {
			return {
				step: "step1",
				steps: actionSteps["default"],
				nowStepIdx: 0,
				progressStepIdx: 0,
			}
		}
		const step = $settingState[action][id]?.status.now ?? "step1";
		const steps = actionSteps[$settingState[action][id]?.type ?? "default"];
		const nowStepIdx = steps.reduce((pre, cur, i) => step === cur ? i : pre, -1);
		const progressStep = $settingState[action][id]?.status.progress ?? "step1";
		const progressStepIdx = steps.reduce((pre, cur, i) => progressStep === cur ? i : pre, -1);
		return {
			step: step,
			steps: steps,
			nowStepIdx: nowStepIdx,
			progressStepIdx: progressStepIdx,
		}
	}
});