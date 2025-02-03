<script lang="ts">
	import { actionLinkedId } from "../../../../../store";
  import ForceComplete from "./Complete/ForceComplete.svelte";
  import ParticleComplete from "./Complete/ParticleComplete.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];

</script>

{#if action === 'force'}
	<ForceComplete {settingId} />
  {:else if action === 'particle'}
	<ParticleComplete {settingId} />
{/if}