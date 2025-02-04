<script lang="ts">
  import { navigate } from "svelte-routing";
  import Button from "../../../../component/button/Button.svelte";
  import Container from "../../../../component/container/Container.svelte";
  import Typography from "../../../../component/typography/Typography.svelte";
  import { derivedNumbering } from "../../../../store";
  import { routes } from "../../../../route";
  import ConditionViewContainer from "./ConditionViewContainer.svelte";
</script>

<Container kind='col'>
  <ConditionViewContainer action='force' label='Force Condition' />
  <span class="border border-gray-500 w-8/12"></span>
  <ConditionViewContainer action='particle' label='Particle Condition' />
  <span class="border border-gray-500 w-8/12"></span>
  <ConditionViewContainer action='solid' label='Solid Condition' />
  <span class="border border-gray-500 w-8/12"></span>
  <Container p={4}>
    <Button onclick={() => navigate(routes.simulation.condition.register.url($derivedNumbering))}>
      <Typography
        label="条件を追加"
        weight="bold"
      />
    </Button>
  </Container>
</Container>