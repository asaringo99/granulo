<script lang="ts">
  import LinkTab from "../../component/tab/LinkTab.svelte";
  import { routes } from "../../route";
	const contents = [
		{ label: "Condition", url: routes.simulation.condition.view.url()},
		{ label: "Preview", url: routes.simulation.condition.preview.url()},
	]
</script>

<LinkTab {contents} />