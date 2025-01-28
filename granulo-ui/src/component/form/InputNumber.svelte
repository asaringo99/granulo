<script lang="ts">
	let { inputValue = $bindable(), label }: {
		inputValue: number
		label: string
	} = $props()
	let isFocus = $state(false);
</script>

<div class="w-full flex justify-center items-center">
	<p class="text-xl">
		{label}
	</p>
	<div class="p-4">
		<button
			class="p-1 m-2 text-xl bg-blue-100 cursor-pointer"
			onclick={() => inputValue--}
		>
			-
		</button>
		<input
			type="number"
			bind:value={inputValue}
			class="w-20 p-2 text-center border-b-2 border-blue-400 focus:border-blue-600 focus:outline-none focus:border-b-2"
			onfocus={() => isFocus = true}
			onblur={() => isFocus = false}
		/>
		<button
			class="p-1 m-2 text-xl bg-blue-100 cursor-pointer"
			onclick={() => inputValue++}
		>
			+
		</button>
	</div>
</div>

<style>
	input[type="number"]::-webkit-outer-spin-button,
	input[type="number"]::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
	}
</style>