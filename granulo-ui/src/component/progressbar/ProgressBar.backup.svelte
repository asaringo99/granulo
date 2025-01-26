<script lang="ts">
	let { stepId, progressId, steps, noShow, onclick = () => {} }: { stepId: number, progressId: number, steps: string[], noShow?: boolean, onclick?: (e: any) => void } = $props();
	let achieveRatio = $derived(progressId * 100 / (steps.length - 1));
</script>

<div class="w-full">
	<div class="w-full p-8">
		<div class="w-full relative">
			<div
				class="w-full flex items-center justify-between absolute"
			>
				<div
					style="width: {100}%"
					class="border-blue-200 border-4 rounded-2xl absolute z-10"
				></div>
				<div
					style="width: {achieveRatio}%"
					class="border-blue-600 border-4 rounded-2xl absolute z-10"
				></div>
				{#each steps as step, i}
					{#if i === steps.length - 1 && noShow}
						<div class="">
						</div>
					{:else}
						<button
							type="button"
							aria-label="{step}-{i}"
							value={step}
							class="rounded-full z-50 cursor-pointer {
								i === stepId
									? "w-16 h-16 bg-indigo-600 border border-indigo-800"
								: i <= progressId 
										? "h-8 w-8 bg-indigo-600 border border-indigo-800"
										: "h-8 w-8 bg-indigo-300 border border-indigo-400"
							}"
							{onclick}
						></button>
					{/if}
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
