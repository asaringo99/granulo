<script lang="ts">
	import { settingsState } from "../../../../../store";
  import { defaulActiontValue } from "../../const";
  import { granuloMessage } from "../../../../../messages";
  import Button from "../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../messages.base";
  import ActionCheckbox from "../../../../component/ActionCheckbox.svelte";

	let { settingId }: { settingId: string} = $props();
	let action: ActionType | undefined = $state($settingsState[settingId]?.type ?? undefined);

	const oncheck = (value: ActionType) => {
		action = value;
  }

	const onclick = () => {
		if (!action) {
			alert("入力してね");
			return;
		}
		let key = Object.keys($settingsState).find((setting) => setting === settingId)
		if (key && $settingsState[settingId].type === action) {
			alert("同じやーん");
			return;
		}
		settingsState.update((setting) => {
			let updated = {
				...setting,
				[settingId]: defaulActiontValue[action!]
			}
			return updated
		})
	}

	let selected = $derived($settingsState[settingId]?.type ?? -1);

</script>

<div class="w-full">
	<div class="w-full p-4 flex justify-center items-center text-xl">
		{granuloMessage.conditionSettingDescriptionForStep1}
	</div>
	<ActionCheckbox
			oncheck={(value: ActionType) => oncheck(value)}
			{selected}
			name={`action-${settingId}`}
	/>
	<div class="mt-8 flex justify-center items-center">
		<Button {onclick}>
			<div slot="children" class="text-xl font-bold">
				{granuloBaseMessage.decide}
			</div>
		</Button>
	</div>
</div>