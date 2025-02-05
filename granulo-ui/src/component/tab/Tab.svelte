<script lang="ts">
  import Container from "../container/Container.svelte";

	let { contents, selectedIdx = 0 }: { contents: TabType[], selectedIdx: number } = $props();
</script>

<Container height="h-full">
	{#each contents as component, idx}
		<Container bgColor="bg-amber-100">
			{#if selectedIdx === idx}
				<button class="cursor-pointer text-white" onclick={() => selectedIdx = idx}>
					{component.label}
				</button>
			{:else}
				<button class="cursor-pointer" onclick={() => selectedIdx = idx}>
					{component.label}
				</button>
			{/if}
		</Container>
	{/each}
	<div class="overflow-scroll">
		{#each contents as component, idx}
			{#if selectedIdx === idx}
				<component.component></component.component>
			{/if}
		{/each}
	</div>
</Container>