<script lang="ts">
  import Overall from "../../component/contents/Overall.svelte";
	import Spot from "../../component/contents/Spot.svelte";
  import Checkbox from "../../component/form/Checkbox.svelte";

let {oncheck, selected, name} = $props()
	const items: RadioItemType<'overall' | 'spot'>[] = [
			{
					id: `spot-${name}`,
					label: "Spot",
					value: "spot",
					component: Spot,
			},
			{
					id: `overall-${name}`,
					label: "overall",
					value: "overall",
					component: Overall,
			},
	]
	const label = "Setting"
	const onclick = (e: any) => {
			oncheck(e.target.value);
	}

</script>


<div class="flex justify-center w-full">
	<Checkbox {name} {items} {selected} {onclick}/>
</div>