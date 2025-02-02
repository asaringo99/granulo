<script lang="ts">
	import { actionLinkedId, settingsState } from "../../../../../store";
  import { defaulActiontValue } from "../../const";
  import { granuloMessage } from "../../../../../messages";
  import Button from "../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../messages.base";
  import ActionCheckbox from "../../../../component/ActionCheckbox.svelte";
  import ForceComplete from "./Complete/ForceComplete.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];

</script>

{#if action === 'force'}
	<ForceComplete {settingId} />
{/if}