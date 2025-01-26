import { writable, readonly, derived, type Writable } from "svelte/store";
import { actionSteps, convertStep, defaulActiontValue } from "./features/simulation/condition/const";

export const settingsState: Writable<Record<string, ActionSetting>> = writable({});
export const readableSettingState = readonly(settingsState);

settingsState.subscribe(console.log);
readableSettingState.subscribe(console.log);

export const getStepStatus = derived(settingsState, ($settingState) => {
	return (id: string) => {
		const step = $settingState[id]?.status.now ?? "step1";
		const steps = actionSteps[$settingState[id]?.type ?? "default"];
		const nowStepIdx = steps.reduce((pre, cur, i) => step === cur ? i : pre, -1);
		const progressStep = $settingState[id]?.status.progress ?? "step1";
		const progressStepIdx = steps.reduce((pre, cur, i) => progressStep === cur ? i : pre, -1);
		return {
			step: step,
			steps: steps,
			nowStepIdx: nowStepIdx,
			progressStepIdx: progressStepIdx,
		}
	}
});