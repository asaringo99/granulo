<script lang="ts">
  import Button from "../../../../../component/button/Button.svelte";
  import InputNumber from "../../../../../component/form/InputNumber.svelte";
	import { granuloMessage } from "../../../../../messages";
  import { granuloBaseMessage } from "../../../../../messages.base";
  import { settingsState } from "../../../../../store";
  import OverallCheckbox from "../../../../component/OverallCheckbox.svelte";

	let { settingId }: { settingId: string} = $props();
	let forceSettingState = $settingsState['force'][settingId];
	let enableOverall: boolean | undefined = $state(forceSettingState.overall);
	let overall = $derived(enableOverall === undefined ? undefined : enableOverall ? 'overall' : 'spot');
	let inputValueF = $state(forceSettingState.f ?? 0);
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
						now: 'force-step3',
						progress: 'force-step3',
					},
					overall: enableOverall,
					f: inputValueF,
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
			外力Fを適用するエリアを選択してください
		</div>
		<OverallCheckbox
			oncheck={(value: 'overall' | 'spot') => oncheck(value)}
			selected={overall}
			name={`action-${settingId}`}
		/>
		{#if enableOverall === false}
			<div class="w-full p-4 flex justify-center items-center text-xl font-bold">
				{granuloMessage.conditionSettingCoordinateDescriptionForForceStep2}
			</div>
			<InputNumber bind:inputValue={inputValueX} label={"X座標"}/>
			<InputNumber bind:inputValue={inputValueY} label={"Y座標"}/>
		{/if}
		<!-- <div class="flex justify-center items-center p-8">
			<hr class="border-gray-300 w-8/12 inline-flex items-center">
		</div> -->
		<div class="w-full p-4 flex justify-center items-center text-xl font-bold">
			{granuloMessage.conditionSettingForceDescriptionForForceStep2}
		</div>
		<InputNumber bind:inputValue={inputValueF} label={"外力F"}/>
		<div class="mt-8 flex justify-center items-center">
			<Button {onclick}>
				<div slot="children" class="text-xl font-bold">
					{granuloBaseMessage.decide}
				</div>
			</Button>
		</div>
	</div>
</div>