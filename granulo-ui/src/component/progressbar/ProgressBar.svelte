<script lang="ts">
	let { nowStep = 0, steps = ["step0", "完了"] }: { nowStep: number, steps: string[] } = $props();
	let achieveRatio = nowStep / (steps.length - 1) * 100;
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
				class="border-blue-400 border-4 rounded-2xl absolute z-10"
				></div>
				{#each steps as step, i}
					<div class="{i === nowStep ? "w-16 h-16 bg-green-400 border border-green-600" : "h-8 w-8 bg-green-600 border border-green-800"} rounded-full z-50 cursor-pointer transition-all duration-200">
					</div>
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
					<div class="{i === nowStep ? "w-16 font-bold text-2x" : "w-8"} h-8 z-50 flex items-center justify-center">
						{step}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
