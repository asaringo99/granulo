<script lang="ts">
  import ProgressBar from "../../../component/progressbar/ProgressBar.svelte";
  import Step1 from "./Step/Step1.svelte";

	let { id }: { id: string } = $props();
	let nowStep = $state(0);
</script>

<div class="w-full">
	<ProgressBar {nowStep} steps={["step1", "完了"]} noShow={nowStep === 0}/>
	<Step1 settingIdx={id} />
</div>