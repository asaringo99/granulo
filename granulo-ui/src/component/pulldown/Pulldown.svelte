<script lang="ts">
	let { label, open = true }: {label: string, open?: boolean} = $props();
	let isOpen = $state(open);
</script>

<div class="w-full flex-col items-center">
	<div class="flex w-full justify-center">
		<div class="pr-2">{label}</div>
		<button
			class={`cursor-pointer transition-transform duration-300 ${isOpen ? "transform rotate-90" : ""}`}
			onclick={() => {isOpen = !isOpen}}>{">"}
		</button>
	</div>
	{#if isOpen}
		<slot name="children"></slot>
	{/if}
</div>