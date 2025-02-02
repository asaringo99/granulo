<script lang="ts">
	import { actionLinkedId, settingsState } from "../../../../../../store";
  import { defaulActiontValue } from "../../../const";
  import { granuloMessage } from "../../../../../../messages";
  import Button from "../../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../../messages.base";
  import ActionCheckbox from "../../../../../component/ActionCheckbox.svelte";
  import Typography from "../../../../../../component/typography/Typography.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];
	let forceAction = $settingsState['force'][settingId];
	let selectedAction: ActionType | undefined = $state(action);

	const oncheck = (value: ActionType) => {
		selectedAction = value;
  }
</script>

<div class="w-full flex-col justify-center items-center">
	<Typography
		label={granuloMessage.conditionSettingConfirmTextOnComplete}
		weight='bold'
		size='lerge'
	/>
	<div
		class="p-6 border-y"
	>
		<Typography
			label="外力F"
			weight="bold"
			position="left"
		/>
	</div>
</div>