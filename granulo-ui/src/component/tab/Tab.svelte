<script lang="ts">
	let { contents }: { contents: TabType[] } = $props();
</script>

<div class="w-full h-full flex items-center justify-center">
	<div class="overflow-scroll">
		{#each contents as {label, component}}
			<div>
				d
			</div>
		{/each}
	</div>
</div>