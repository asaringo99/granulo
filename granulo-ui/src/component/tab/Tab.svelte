<script lang="ts">
	let { contents }: { contents: TabType[] } = $props();
</script>

<div class="w-full h-full flex items-center justify-center">
	<div class="overflow-scroll">
		{#each contents as content}
			<div>
				d
			</div>
		{/each}
	</div>
</div>