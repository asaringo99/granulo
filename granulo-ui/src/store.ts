import { writable, readonly, derived, type Writable, type Readable } from "svelte/store";
import { actionSteps } from "./features/simulation/condition/const";

export const conditionsState: Writable<ActionSetting> = writable({
	particle: {},
	force: {},
	solid: {}
});
export const readableSettingState = readonly(conditionsState);

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