<script lang="ts">
	import Layout from "../../features/Layout.svelte";
  import View from "../../features/simulation/view/View.svelte";
  import { particleArtifact } from "./particle.ex";
</script>

<Layout>
	<div slot="children" class="flex justify-center w-full h-full">
			<View target={particleArtifact}/>
	</div>
</Layout>