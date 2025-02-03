<script lang="ts">
	import { actionLinkedId } from "../../../../../store";
  import ParticleStep3 from "./Step3/ParticleStep3.svelte";

	let { settingId }: { settingId: string } = $props();
	let action: ActionType | undefined = $actionLinkedId[settingId];

</script>

{#if action === 'particle'}
	<ParticleStep3 {settingId} />
{/if}