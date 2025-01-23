<script lang="ts">
  import CanvasView from "../../../component/canvas/CanvasView.svelte";

	let { target }: { target: CanvasArtifact } = $props();
</script>

<div class="w-full h-full flex flex-col items-center justify-center">
	<CanvasView {target} />
</div>
