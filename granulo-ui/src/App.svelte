<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import Home from "./page/home/Home.svelte";
  import Condition from "./page/simulation/Condition.svelte";
  import { routes } from "./route";
  import Execute from "./page/simulation/Execute.svelte";
  import View from "./page/simulation/View.svelte";
</script>

<Router>
  <Route path={routes.root.url()} component={Home} />
  <Route path={routes.home.top.url()} component={Home} />
  <Route path={routes.simulation.condition.setting.url()} component={Condition} />
  <Route path={routes.simulation.execute.url()} component={Execute} />
  <Route path={routes.simulation.view.url()} component={View} />
</Router>