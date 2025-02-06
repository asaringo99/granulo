<script lang="ts">
	import Container from "../../../component/container/Container.svelte";
import Layout from "../../../features/Layout.svelte";
  import SimulationTab from "../../../features/simulation/SimulationTab.svelte";
  import Preview from "../../../features/simulation/condition/preview/Preview.svelte";
  import { particleArtifact } from "../particle.ex";
</script>

<Layout>
	<SimulationTab />
	<Container height="h-full" width="w-full">
		<Preview/>
	</Container>
</Layout>