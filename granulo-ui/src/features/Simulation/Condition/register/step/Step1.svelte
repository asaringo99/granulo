<script lang="ts">
	import { actionLinkedId, settingsState } from "../../../../../store";
  import { defaulActiontValue } from "../../const";
  import { granuloMessage } from "../../../../../messages";
  import Button from "../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../messages.base";
  import ActionCheckbox from "../../../../component/ActionCheckbox.svelte";
  import Typography from "../../../../../component/typography/Typography.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];
	let selectedAction: ActionType | undefined = $state(action);

	const oncheck = (value: ActionType) => {
		selectedAction = value;
  }

	const onclick = () => {
		if (!selectedAction) {
			alert("入力してね");
			return;
		}
		if (Object.keys($settingsState[selectedAction]).includes(settingId)) {
			alert("同じやーん");
			return;
		}
		settingsState.update((setting) => {
			const remForce: ActionSetting['force'] = Object.entries(setting['force']).reduce((pre, [k, v]) => settingId === k ? pre : {...pre, [k]: v}, {});
			const remParticle: ActionSetting['particle'] = Object.entries(setting['particle']).reduce((pre, [k, v]) => settingId === k ? pre : {...pre, [k]: v}, {});
			const remSolid: ActionSetting['solid'] = Object.entries(setting['solid']).reduce((pre, [k, v]) => settingId === k ? pre : {...pre, [k]: v}, {});
			return {
				force: remForce,
				particle: remParticle,
				solid: remSolid,
			}
		})
		settingsState.set({
				...$settingsState,
				[selectedAction]: {
					[settingId]: defaulActiontValue[selectedAction],
				}
			})
	}

	let selected = $derived(action ? $settingsState[action][settingId]?.type : -1);
</script>

<div class="w-full">
	<Typography
		label={granuloMessage.conditionSettingDescriptionOnStep1}
		weight='bold'
		size='large'
	/>
	<ActionCheckbox
			oncheck={(value: ActionType) => oncheck(value)}
			{selected}
			name={`action-${settingId}`}
	/>
	<div class="mt-8 flex justify-center items-center">
		<Button {onclick}>
			<div class="text-xl font-bold">
				{granuloBaseMessage.next}
			</div>
		</Button>
	</div>
</div>