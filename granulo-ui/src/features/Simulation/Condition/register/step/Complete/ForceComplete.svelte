<script lang="ts">
	import { actionLinkedId, settingsState } from "../../../../../../store";
  import { defaulActiontValue } from "../../../const";
  import { granuloMessage } from "../../../../../../messages";
  import Button from "../../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../../messages.base";
  import ActionCheckbox from "../../../../../component/ActionCheckbox.svelte";
  import Typography from "../../../../../../component/typography/Typography.svelte";
  import { lang } from "../../../../../../state.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];
	let forceAction = $settingsState['force'][settingId];
	let selectedAction: ActionType | undefined = $state(action);

	const oncheck = (value: ActionType) => {
		selectedAction = value;
  }
</script>

<div class="w-full p-6 flex flex-col justify-center items-center">
	<Typography
		label={granuloMessage.conditionSettingConfirmTextOnComplete}
		weight='bold'
		size='lerge'
	/>
	<div
		class=" w-8/12 flex justify-center items-center p-1 border-y border-gray-500"
	>
		<div class="w-full p-2 flex justify-center items-center flex-row">
			<div class="w-full flex justify-center items-center basis-2/12">
				<Typography
					label="外力F"
					weight="bold"
				/>
			</div>
			<div class="w-full p-2 flex flex-col justify-center items-center basis-3/12">
				<Typography
				label="X方向"
				weight="bold"
				/>
				<div class="border border-gray-500 w-full"></div>
				<Typography
				label="Y方向"
				weight="bold"
				/>
			</div>
			<div class="p-2 flex flex-col justify-center items-center basis-7/12">
				<Typography
					label="{forceAction.f.x} [kg・m/s^2]"
					weight="bold"
				/>
				<div class="border border-gray-500 w-full"></div>
				<Typography
					label="{forceAction.f.y} [kg・m/s^2]"
					weight="bold"
				/>
			</div>
		</div>
	</div>
	<div class="w-full p-4 flex justify-center">
		<Button onclick={()=>{}}>
			<Typography
				label={granuloBaseMessage.decide}
				weight='bold'
				size='lerge'
			/>
		</Button>
	</div>
</div>