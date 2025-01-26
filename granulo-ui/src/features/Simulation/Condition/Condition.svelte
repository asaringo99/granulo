<script lang="ts">
  import ProgressBar from "../../../component/progressbar/ProgressBar.svelte";
  import FirstStep from "./Step/FirstStep.svelte";

	let { id }: { id: string } = $props();
	let nowStep = $state(0);
</script>

<div class="w-full">
	<ProgressBar {nowStep} steps={["step1", "完了"]} noShow={nowStep === 0}/>
	<FirstStep settingIdx={id} />
</div>