<script lang="ts">
	let { items, selected = $bindable(), label, placeholder }: {
		items: { value: any, label: string }[] ,
		selected: any,
		label: string
		placeholder?: string
	} = $props()
</script>

<div class="flex justify-center items-center">
	<p class="text-xl px-3">
		{label}
	</p>
	<select
		bind:value={selected}
		class="text-center border-b-2 border-blue-400 focus:border-blue-600 p-3 focus:outline-none"
	>
		{#if placeholder}
			<option value="" class="bg-white">{placeholder}</option>
		{/if}
		{#each items as item}
			<option value="{item.value}" class="bg-white">{item.label}</option>
		{/each}
	</select>
</div>