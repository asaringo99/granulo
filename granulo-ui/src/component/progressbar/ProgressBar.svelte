<script lang="ts">
	let { stepId, progressId, steps, noShow, onclick = () => {} }: { stepId: number, progressId: number, steps: string[], noShow?: boolean, onclick?: (e: any) => void } = $props();
	let ratio = $derived(100 / (steps.length - 1));
</script>

<div class="w-full">
	<div class="w-full p-8">
		<div class="w-full relative">
			<div
				class="w-full flex items-center justify-between absolute"
			>
				{#each steps as step, i}
					{#if i !== 0}
						<div
							style="width: {ratio}%"
							class="{i <= progressId ? 'border-blue-500' : 'border-blue-100'} border-4"
						>
						</div>
					{/if}
						<button
							type="button"
							aria-label="{step}-{i}"
							value={step}
							class="rounded-full z-50 cursor-pointer {
								i === stepId
									? "w-16 h-16 bg-indigo-600 border border-indigo-800"
								: i <= progressId 
										? "h-8 w-8 bg-indigo-600 border border-indigo-800"
										: "h-8 w-8 bg-indigo-200 border border-indigo-300"
							}"
							{onclick}
						></button>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full p-8">
		<div class="w-full relative">
			<div
			class="w-full flex items-center justify-between"
			>
				{#each steps as step, i}
				{#if i == steps.length - 1 && noShow}
					<div class="flex items-center justify-center">
					</div>
				{:else}
					<div class="{i === stepId ? "w-16 font-bold text-2x" : "w-8"} h-8 z-50 flex items-center justify-center">
						{step}
					</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
