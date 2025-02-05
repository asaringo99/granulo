<script lang="ts">
  import Container from "../component/container/Container.svelte";
import Header from "../component/header/Header.svelte";
  import { routes } from "../route";
	let paths = [
		{url: routes.home.top.url(), label: "home"},
		{url: routes.simulation.condition.view.url(), label: "simulation"},
		{url: routes.user.top.url(), label: "user"},
	]
</script>

<Header routes={paths}/>
<Container height="h-full">
	<div class="pt-32 p-4 w-full flex flex-col justify-center items-center">
		<slot></slot>
	</div>
</Container>