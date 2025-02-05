<script lang="ts">
  import Container from "../../../component/container/Container.svelte";
  import Layout from "../../../features/Layout.svelte";
  import List from "../../../features/simulation/condition/list/List.svelte";
  import SimulationTab from "../../../features/simulation/SimulationTab.svelte";
</script>

<Layout>
  <SimulationTab />
  <Container>
    <List />
  </Container>
</Layout>