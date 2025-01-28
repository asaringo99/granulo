<script lang="ts">
  import Button from "../../../../../component/button/Button.svelte";
  import InputNumber from "../../../../../component/form/InputNumber.svelte";
	import { granuloMessage } from "../../../../../messages";
  import { granuloBaseMessage } from "../../../../../messages.base";
  import { settingsState } from "../../../../../store";

	let { settingId }: { settingId: string} = $props();
	let forceSettingState = $settingsState['force'][settingId];
	let inputValueF = $state(forceSettingState.f ?? 0);
	let inputValueX = $state(forceSettingState.pos?.x ?? 0);
	let inputValueY = $state(forceSettingState.pos?.y ?? 0);

	const onclick = () => {
		console.log(inputValueX, inputValueY, inputValueF)
		settingsState.set({
			...$settingsState,
			['force']: {
				[settingId]: {
					...$settingsState['force'][settingId],
					status: {
						now: 'force-step3',
						progress: 'force-step3',
					},
					pos: {
						x: inputValueX,
						y: inputValueY,
					},
					f: inputValueF,
				}
			}
		})
	}
</script>

<div>
	<div class="w-full">
		<div class="w-full p-4 flex justify-center items-center text-xl font-bold">
			{granuloMessage.conditionSettingCoordinateDescriptionForForceStep2}
		</div>
		<InputNumber bind:inputValue={inputValueX} label={"X座標"}/>
		<InputNumber bind:inputValue={inputValueY} label={"Y座標"}/>
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