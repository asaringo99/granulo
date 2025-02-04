<script lang="ts">
  import { navigate } from "svelte-routing";
  import Button from "../../../../component/button/Button.svelte";
  import Container from "../../../../component/container/Container.svelte";
  import DeleteIcon from "../../../../component/icon/DeleteIcon.svelte";
  import EditIcon from "../../../../component/icon/EditIcon.svelte";
  import Typography from "../../../../component/typography/Typography.svelte";
  import { conditionsState, derivedNumbering } from "../../../../store";
  import { routes } from "../../../../route";

	let { action, label }: { action: 'force' | 'particle' | 'solid', label: string } = $props()
	let conditions = $derived(Object.entries($conditionsState[action]));
</script>

<Container kind='col' p={8}>
	<Typography
		label={label} 
		weight="bold"
		size='6'
	/>
	{#each conditions as [id, condition], idx}

			<Container kind='col'>
				<Typography
					label="No.{idx + 1} {condition.commit ? "" : "（入力中の条件）"}"
					weight={condition.commit ? "default" : "thin"}
				/>
				<Container>
					<Container basis="basis-6/12">
						<Typography
							label={condition.note}
							p={4}
							weight="bold"
						/>
					</Container>
					<Container basis="basis-6/12">
						<Button p={20} onclick={()=>{navigate(routes.simulation.condition.register.url(id))}}>編集<EditIcon /></Button>
						<Button m={4} color="alert" onclick={()=>{
							const {[id]: _, ...rest} = $conditionsState[action]
							conditionsState.set({
								...$conditionsState,
								[action]: {
									...rest
								}
							})
						}}>
							削除
							<DeleteIcon height="24px" width = "24px"/>
						</Button>
					</Container>
				</Container>
			</Container>

	{/each}
</Container>