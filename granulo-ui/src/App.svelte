<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import Home from "./page/home/Home.svelte";
  import Condition from "./page/simulation/Condition.svelte";
  import { routes } from "./route";
</script>

<Router>
  <Route path={routes.root.url()} component={Home} />
  <Route path={routes.home.top.url()} component={Home} />
  <Route path={routes.simulation.condition.setting.url()} component={Condition} />
</Router>