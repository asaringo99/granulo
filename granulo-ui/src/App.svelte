<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import { routes } from "./route";
  import Home from "./page/home/Home.svelte";
  import ConditionRegister from "./page/simulation/condition/ConditionRegister.svelte";
  import Execute from "./page/simulation/Execute.svelte";
  import Error from "./page/Error.svelte";
  import ConditionView from "./page/simulation/condition/ConditionList.svelte";
  import Preview from "./page/simulation/condition/ConditionPreview.svelte"
</script>

<Router>
  <Route path={routes.root.url()} component={Home} />
  <Route path={routes.home.top.url()} component={Home} />
  <Route path={routes.simulation.condition.register.url()} let:params><ConditionRegister {params}/></Route>
  <Route path={routes.simulation.execute.url()} component={Execute} />
  <Route path={routes.simulation.condition.preview.url()} component={Preview} />
  <Route path={routes.simulation.condition.view.url()} component={ConditionView} />
  <Route component={Error} />
</Router>