<script lang="ts">
  import Header from "../component/header/Header.svelte";
  import { routes } from "../route";
	let paths = [
		{url: routes.home.top.url(), label: "home"},
		{url: routes.simulation.condition.view.url(), label: "simulation"},
		{url: routes.user.top.url(), label: "user"},
	]
</script>

<div class="w-full h-full">
	<Header routes={paths}/>
	<div class="pt-32 p-4">
		<slot></slot>
	</div>
</div>