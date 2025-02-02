<script lang="ts">
import Button from "../../../../../component/button/Button.svelte";
  import InputNumber from "../../../../../component/form/InputNumber.svelte";
  import Typography from "../../../../../component/typography/Typography.svelte";
	import { granuloMessage } from "../../../../../messages";
  import { granuloBaseMessage } from "../../../../../messages.base";
  import { settingsState } from "../../../../../store";
  import OverallCheckbox from "../../../../component/OverallCheckbox.svelte";

	let { settingId }: { settingId: string} = $props();
	let forceSettingState = $settingsState['force'][settingId];
	let enableOverall: boolean | undefined = $state(forceSettingState.overall);
	let overall = $derived(enableOverall === undefined ? undefined : enableOverall ? 'overall' : 'spot');
	let inputValueForceForX = $state(forceSettingState.f.x ?? 0);
	let inputValueForceForY = $state(forceSettingState.f.y ?? 0);
	let inputValueX = $state(forceSettingState.pos?.x ?? 0);
	let inputValueY = $state(forceSettingState.pos?.y ?? 0);

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
			['force']: {
				[settingId]: {
					...$settingsState['force'][settingId],
					status: {
						now: 'complete',
						progress: 'complete',
					},
					overall: enableOverall,
					f: {
						x: inputValueForceForX,
						y: inputValueForceForY,
					},
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

<div>
	<div class="w-full">
		<div class="w-full flex justify-center items-center text-xl font-bold">
			{granuloMessage.conditionSettingApplyingForceAreaOnForceStep2}
		</div>
		<OverallCheckbox
			oncheck={(value: 'overall' | 'spot') => oncheck(value)}
			selected={overall}
			name={`action-${settingId}`}
		/>
		{#if enableOverall === false}
			<Typography
				label={granuloMessage.conditionSettingCoordinateDescriptionOnForceStep2}
				weight='bold'
				size='lerge'
			/>
			<InputNumber bind:inputValue={inputValueX} label={"X座標"}/>
			<InputNumber bind:inputValue={inputValueY} label={"Y座標"}/>
			{/if}
			<div class="w-full p-4 flex justify-center items-center text-xl font-bold">
			<Typography
				label={granuloMessage.conditionSettingForceDescriptionOnForceStep2}
				weight='bold'
				size='lerge'
			/>
		</div>
		<InputNumber bind:inputValue={inputValueForceForX} label={"X方向への力"}/>
		<InputNumber bind:inputValue={inputValueForceForY} label={"Y方向への力"}/>
		<div class="mt-8 flex justify-center items-center">
			<Button {onclick}>
				<div slot="children" class="text-xl font-bold">
					{granuloBaseMessage.next}
				</div>
			</Button>
		</div>
	</div>
</div>