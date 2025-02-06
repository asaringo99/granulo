<script lang="ts">
  import { navigate } from "svelte-routing";
  import Button from "../../../../component/button/Button.svelte";
  import CanvasView from "../../../../component/canvas/CanvasView.svelte";
  import Container from "../../../../component/container/Container.svelte";
  import Typography from "../../../../component/typography/Typography.svelte";
  import { routes } from "../../../../route";
</script>

<Container height="h-full" kind="col">
	<Container>
		<Button onclick={() => navigate(routes.simulation.execute.url())}>
			<Typography 
				label="シミュレーションを開始する"
				weight="bold"
			/>
		</Button>
	</Container>
	<Container width="w-6/12">
		<Container>
			<div class="h-6 w-6 rounded-full border border-black"></div>
			<Typography
				label="：粒子"
			/>
		</Container>
		<Container>
			<div class="h-6 w-6 rounded-full border border-black bg-black"></div>
			<Typography
				label="：外力"
			/>
		</Container>
	</Container>
	<CanvasView/>
</Container>
