<script lang="ts">
  import Action from "../Action/Action.svelte";
	import { settingsState } from "../../../../store";
  import { defaulActiontValue } from "../const";
  import { granuloMessage } from "../../../../messages";
  import Button from "../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../messages.base";
  import { navigate } from "svelte-routing";

	const unsubscribe = settingsState.subscribe((v) => {console.log(v)})
	console.log(1)
	let { settingIdx }: { settingIdx: string} = $props();
	let action: ActionType | undefined = $state();

	const oncheck = (value: ActionType) => {
		action = value;
  }

	const onclick = () => {
		if (!action) {
			alert("入力してね");
			return;
		}
		let key = Object.keys(settingsState).find((setting) => setting === settingIdx)
		if (key && $settingsState[settingIdx].type === action) {
			alert("同じやーん");
			return;
		}
		alert("ok?")
		settingsState.update((setting) => {
			let updated = {
				...setting,
				[settingIdx]: defaulActiontValue[action!]
			}
			return updated
		})
		$settingsState[settingIdx] = defaulActiontValue[action];
		unsubscribe();
		navigate("/simulation/condition/setting/1")
	}

	let selected = $derived($settingsState[settingIdx]?.type ?? -1);

</script>

<div class="w-full">
	<div class="w-full p-4 flex justify-center items-center text-xl">
		{granuloMessage.conditionSettingFirstDescription}
	</div>
	<Action
			oncheck={(value: ActionType) => oncheck(value)}
			{selected}
			name={`action-${settingIdx}`}
	/>
	<div class="mt-8 flex justify-center items-center">
		<Button {onclick}>
			<div slot="children" class="text-xl font-bold">
				{granuloBaseMessage.decide}
			</div>
		</Button>
	</div>
</div>