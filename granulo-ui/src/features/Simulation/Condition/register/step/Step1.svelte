<script lang="ts">
	import { actionLinkedId, conditionsState } from "../../../../../store";
  import { defaulActiontValue } from "../../const";
  import { granuloMessage } from "../../../../../messages";
  import Button from "../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../messages.base";
  import ActionCheckbox from "../../../../component/ActionCheckbox.svelte";
  import Typography from "../../../../../component/typography/Typography.svelte";
  import Container from "../../../../../component/container/Container.svelte";
  import InputText from "../../../../../component/form/InputText.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];
	let selectedAction: ActionType | undefined = $state(action);
	let inputNote: string = $state($conditionsState[action]?.[settingId].note ?? "");
	let selected = $derived(action ? $conditionsState[action][settingId]?.type : -1);

	const oncheck = (value: ActionType) => {
		selectedAction = value;
  }

	const onclick = () => {
		if (!selectedAction) {
			alert("入力してね");
			return;
		}
		if (Object.keys($conditionsState[selectedAction]).includes(settingId)) {
			conditionsState.set({
			...$conditionsState,
			[selectedAction]: {
				...$conditionsState[selectedAction],
				[settingId]: {
					...$conditionsState[selectedAction][settingId],
					note: inputNote,
					status: {
						...$conditionsState[selectedAction][settingId].status,
						now: 'step2',
					}
				}
			}
		})
			return;
		}
		conditionsState.update((setting) => {
			const {[settingId]: _f, ...restForce } = setting['force'];
			const {[settingId]: _p, ...restParticle } = setting['particle'];
			const {[settingId]: _r, ...restSolid } = setting['solid'];
			return {
				force: restForce,
				particle: restParticle,
				solid: restSolid,
			}
		})
		conditionsState.set({
			...$conditionsState,
			[selectedAction]: {
				...$conditionsState[selectedAction],
				[settingId]: {
					...defaulActiontValue[selectedAction],
					note: inputNote,
				}
			}
		})
	}
</script>

<div class="w-full">
	<Typography
		label={granuloMessage.conditionSettingDescriptionOnStep1}
		weight='bold'
		size=4
	/>
	<ActionCheckbox
			oncheck={(value: ActionType) => oncheck(value)}
			{selected}
			name={`action-${settingId}`}
	/>
	<Container kind='col'>
		<Typography
			label="（任意）条件に注釈を付けてください"
			size=3
			weight='bold'
			width="w-full"
		/>
		<InputText bind:inputValue={inputNote} label="注釈" placeholder="入力してください" maxlength={50} width="w-8/12" />
	</Container>
	<div class="mt-8 flex justify-center items-center">
		<Button {onclick}>
			<div class="text-xl font-bold">
				{granuloBaseMessage.next}
			</div>
		</Button>
	</div>
</div>