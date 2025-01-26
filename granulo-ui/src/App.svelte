<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import { routes } from "./route";
  import Home from "./page/home/Home.svelte";
  import Register from "./page/simulation/condition/Register.svelte";
  import Execute from "./page/simulation/Execute.svelte";
  import View from "./page/simulation/View.svelte";
  import Error from "./page/Error.svelte";
</script>

<Router>
  <Route path={routes.root.url()} component={Home} />
  <Route path={routes.home.top.url()} component={Home} />
  <Route path={routes.simulation.condition.setting.url()} let:params><Register {params}/></Route>
  <Route path={routes.simulation.execute.url()} component={Execute} />
  <Route path={routes.simulation.view.url()} component={View} />
  <Route component={Error} />
</Router>