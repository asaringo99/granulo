<script lang="ts">
	import Layout from "../../features/Layout.svelte";
  import Execute from "../../features/simulation/execute/Execute.svelte";
  import { particleAction } from "./particle.ex";
</script>

<Layout>
	<div class="flex justify-center w-full h-full">
			<Execute target={particleAction}/>
	</div>
</Layout>