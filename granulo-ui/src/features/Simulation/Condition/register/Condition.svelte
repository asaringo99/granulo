<script lang="ts">
  import ProgressBar from "../../../../component/progressbar/ProgressBar.svelte";
  import { getStepStatus, readableSettingState, settingsState } from "../../../../store";
  import { actionSteps, convertStep, FIRST_STEP } from "../const";
  import ForceStep2 from "./step/ForceStep2.svelte";
  import ForceStep3 from "./step/ForceStep3.svelte";
  import Step1 from "./step/Step1.svelte";
	
	let { id }: { id: string } = $props();
	const stepStatus = $getStepStatus(id);
	let steps = $state(stepStatus.steps);
	let step = $state(stepStatus.step)
	let nowStepIdx = $state(stepStatus.nowStepIdx);
	let progressStepIdx = $state(stepStatus.progressStepIdx);
	$effect(() => {
		const status = $getStepStatus(id);
		steps = status.steps;
		step = status.step;
		nowStepIdx = status.nowStepIdx;
		progressStepIdx = status.progressStepIdx;
	})
	const onclick = (e: any) => {
		let stepStatus = $getStepStatus(id);
		console.log(stepStatus)
		let targetStep = e.target.value;
		if (stepStatus.step.includes(targetStep)) {
			return;
		}
		settingsState.set({
			...$settingsState,
			[id]: {
				...$settingsState[id],
				status: {
					...$settingsState[id].status,
					now: stepStatus.steps.find((s) => s.includes(targetStep)) ?? "step1",
				},
			}
		})
		nowStepIdx = $getStepStatus(id).nowStepIdx;
	}
</script>

<div class="w-full">
	<ProgressBar stepId={nowStepIdx} progressId={progressStepIdx} steps={steps.map((s) => convertStep(s))} {onclick}/>
	{#if step === 'step1'} <Step1 settingId={id} />
	{:else if step === 'force-step2'} <ForceStep2 />
	{:else if step === 'force-step3'} <ForceStep3 />
	{:else}
		<div>dddddd</div>
	{/if}
</div>