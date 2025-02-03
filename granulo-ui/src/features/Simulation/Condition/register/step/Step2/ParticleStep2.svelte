<script lang="ts">
	import Button from "../../../../../../component/button/Button.svelte";
  import Container from "../../../../../../component/container/Container.svelte";
		import InputNumber from "../../../../../../component/form/InputNumber.svelte";
		import Typography from "../../../../../../component/typography/Typography.svelte";
		import { granuloMessage } from "../../../../../../messages";
		import { granuloBaseMessage } from "../../../../../../messages.base";
		import { settingsState } from "../../../../../../store";
		import OverallCheckbox from "../../../../../component/OverallCheckbox.svelte";
	
		let { settingId }: { settingId: string} = $props();
		let particleSettingState = $settingsState['particle'][settingId];
		let enableOverall: boolean | undefined = $state(particleSettingState.overall);
		let overall = $derived(enableOverall === undefined ? undefined : enableOverall ? 'overall' : 'spot');
		let inputValueX = $state(particleSettingState.pos?.x ?? 0);
		let inputValueY = $state(particleSettingState.pos?.y ?? 0);
		let inputNum = $state(particleSettingState.num ?? 0);
	
		const oncheck = (value: 'overall' | 'spot') => {
			enableOverall = value === 'overall';
		}
	
		const onclick = () => {
			if (enableOverall === undefined) {
				alert("checkして")
				return;
			}
			settingsState.set({
				...$settingsState,
				['particle']: {
					[settingId]: {
						...$settingsState['particle'][settingId],
						status: {
							now: 'step3',
							progress: 'step3',
						},
						num: inputNum,
						overall: enableOverall,
						...(!enableOverall ? {
							pos: {
								x: inputValueX,
								y: inputValueY,
							}
						} : {
							pos: undefined
						}),
					}
				}
			})
		}
	</script>
	
<Container kind='col'>
	<Typography
		label={granuloMessage.conditionSettingApplyingParticleAreaOnParticleStep2}
		size=4
		weight='bold'
	/>
	<OverallCheckbox
		oncheck={(value: 'overall' | 'spot') => oncheck(value)}
		selected={overall}
		name={`action-${settingId}`}
	/>
	{#if enableOverall === false}
		<Typography
			label={granuloMessage.conditionSettingCoordinateDescriptionOnParticleStep2}
			weight='bold'
			size=4
		/>
		<InputNumber bind:inputValue={inputValueX} label={"X座標"}/>
		<InputNumber bind:inputValue={inputValueY} label={"Y座標"}/>
		{/if}
		<Typography
			label={granuloMessage.conditionSettingParticleNumberOnParticleStep2}
			weight='bold'
			size=4
		/>
		<InputNumber bind:inputValue={inputNum} label={"粒子数"}/>
		<Container>
			<Button {onclick}>
				<Typography
				p={2}
				label={granuloBaseMessage.next}
				weight='bold'
				size=4
				/>
		</Button>
	</Container>
</Container>