<script lang="ts">
  import ProgressBar from "../../../../component/progressbar/ProgressBar.svelte";
  import { actionLinkedId, getStepStatus, readableSettingState, settingsState } from "../../../../store";
  import { actionSteps, convertStep, FIRST_STEP } from "../const";
  import Complete from "./step/Complete.svelte";
  import Step1 from "./step/Step1.svelte";
  import Step2 from "./step/Step2.svelte";
  import Step3 from "./step/Step3.svelte";
	
	let { id }: { id: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[id];
	const stepStatus = $getStepStatus(action, id);
	let steps = $state(stepStatus.steps);
	let step = $state(stepStatus.step)
	let nowStepIdx = $state(stepStatus.nowStepIdx);
	let progressStepIdx = $state(stepStatus.progressStepIdx);

	$effect(() => {
		console.log(action, id)
		action = $actionLinkedId[id]
		const status = $getStepStatus(action, id);
		steps = status.steps;
		step = status.step;
		nowStepIdx = status.nowStepIdx;
		progressStepIdx = status.progressStepIdx;
	})

	const onclick = (e: any) => {
		let stepStatus = $getStepStatus(action, id);
		console.log(stepStatus)
		let targetStep = e.target.value;
		if (!action) {
			return;
		}
		if (stepStatus.step.includes(targetStep)) {
			return;
		}
		settingsState.set({
			...$settingsState,
			[action]: {
				[id]: {
					...$settingsState[action][id],
					status: {
						...$settingsState[action][id].status,
						now: stepStatus.steps.find((s) => s.includes(targetStep)) ?? "step1",
					},
				}
			}
		})
		nowStepIdx = $getStepStatus(action, id).nowStepIdx;
	}
</script>

<div class="w-full flex flex-col justify-center items-center">
	<div class="w-5/6">
		<ProgressBar stepId={nowStepIdx} progressId={progressStepIdx} steps={steps.map((s) => convertStep(s))} {onclick}/>
	</div>
	{#if step === 'step1'} <Step1 settingId={id} />
	{:else if step === 'step2'} <Step2 settingId={id} />
	{:else if step === 'step3'} <Step3 settingId={id} />
	{:else if step === 'complete'} <Complete settingId={id} />
	{:else}
		<div>dddddd</div>
	{/if}
</div>