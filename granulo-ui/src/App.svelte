<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import { routes } from "./route";
  import Home from "./page/home/Home.svelte";
  import ConditionRegister from "./page/simulation/condition/ConditionRegister.svelte";
  import Execute from "./page/simulation/Execute.svelte";
  import Error from "./page/Error.svelte";
  import ConditionView from "./page/simulation/condition/ConditionView.svelte";
  import View from "./page/simulation/View.svelte";
</script>

<Router>
  <Route path={routes.root.url()} component={Home} />
  <Route path={routes.home.top.url()} component={Home} />
  <Route path={routes.simulation.condition.register.url()} let:params><ConditionRegister {params}/></Route>
  <Route path={routes.simulation.condition.view.url()} component={ConditionView} />
  <Route path={routes.simulation.execute.url()} component={Execute} />
  <Route path={routes.simulation.view.url()} component={View} />
  <Route component={Error} />
</Router>