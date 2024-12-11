<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import Home from "./page/Home.svelte";
  import Simulation from "./page/Simulation.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/simulation" component={Simulation} />
</Router>