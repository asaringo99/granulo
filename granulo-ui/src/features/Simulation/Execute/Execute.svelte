<script lang="ts">
  import CanvasMovie from "../../../component/canvas/CanvasMovie.svelte";

	let { target } = $props();

</script>

<div class="w-full h-full flex flex-col items-center justify-center">
	<CanvasMovie {target}/>
</div>