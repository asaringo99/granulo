<script lang="ts">
  import { Link } from "svelte-routing";
  import Container from "../container/Container.svelte";

	let { contents }: { contents: LinkTabType[] } = $props();
	let url = $derived(window.location.pathname);
</script>

<Container width="w-8/12" border="border-b" borderColor="border-blue-400" p={1} m={2}>
	{#each contents as content, idx}
		<Container justify="center">
			{#if url === content.url}
				<Container bgColor="bg-gray-500" rounded="rounded-lg">
					<button class="cursor-pointer text-white">
						{content.label}
					</button>
				</Container>
				{:else}
				<Link to={content.url} class="cursor-pointer">
					{content.label}
				</Link>
			{/if}
		</Container>
	{/each}
</Container>