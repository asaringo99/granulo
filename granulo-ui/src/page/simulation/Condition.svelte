<script lang="ts">
    import ConditionComponent from "../../features/Simulation/Condition/ConditionComponent.svelte";
    import Layout from "../../features/Layout.svelte";
    import ProgressBar from "../../component/progressbar/ProgressBar.svelte";

    let nowStep = $state(0);
</script>

<Layout>
    <div slot="children" class="flex justify-center items-center w-full h-full">
        <div class="w-full">
            <ProgressBar {nowStep} steps={["step1", "step2", "完了"]}/>
            <ConditionComponent />
        </div>
    </div>
</Layout>