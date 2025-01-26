<script lang="ts">
  import { Link } from "svelte-routing";

	let { routes } = $props();
</script>

<div class="w-full h-28 flex justify-around items-center fixed p-12 bg-slate-300 z-50">
	{#each routes as route}
		<div class="duration-200 transition-transform">
			<Link
				class="text-xl font-bold hover:underline"
				to={route.url}
			>
				{route.label}
			</Link>
		</div>
	{/each}
</div>