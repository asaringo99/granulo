<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import Home from "./page/Home.svelte";
  import Condition from "./page/Condition.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/condition" component={Condition} />
</Router>