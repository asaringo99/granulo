<script lang="ts">
  import Container from "../container/Container.svelte";
  import Typography from "../typography/Typography.svelte";

	let { inputValue = $bindable(), label, placeholder, maxlength, width }: {
		inputValue: string
		label: string
		placeholder?: string
		maxlength?: number
		width?: Width
	} = $props()
	let isFocus = $state(false);
</script>


<Container {width} items="center" justify="center">
	<Container basis="basis-3/12" p={32}>
		<Typography
			{label}
			weight="bold"
			size=3
		/>
	</Container>
	<Container basis="basis-9/12">
		<input
			type="text"
			bind:value={inputValue}
			{placeholder}
			{maxlength}
			class="w-full p-1 text-center border-b-2 border-blue-400 focus:border-blue-600 focus:outline-none focus:border-b-2"
			onfocus={() => isFocus = true}
			onblur={() => isFocus = false}
		/>
	</Container>
</Container>
