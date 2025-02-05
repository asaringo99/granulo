<script lang="ts">
  import CanvasView from "../../../../component/canvas/CanvasView.svelte";
  import Container from "../../../../component/container/Container.svelte";

	let { target }: { target: CanvasArtifact } = $props();
</script>

<Container height="h-full">
	<CanvasView {target} />
</Container>
