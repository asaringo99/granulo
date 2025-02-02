<script lang="ts">
	import { actionLinkedId } from "../../../../../store";
  import ForceStep2 from "./Step2/ForceStep2.svelte";
  import ParticleStep2 from "./Step2/ParticleStep2.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];

</script>

{#if action === 'force'}
	<ForceStep2 {settingId} />
{:else if action === 'particle'}
	<ParticleStep2 {settingId} />
{/if}