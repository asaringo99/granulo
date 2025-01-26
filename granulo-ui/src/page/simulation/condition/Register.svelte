<script lang="ts">
    import Layout from "../../../features/Layout.svelte";
    import Condition from "../../../features/simulation/condition/register/Condition.svelte";

    let { params } = $props();
</script>

<Layout>
    <div slot="children" class="flex justify-center items-center w-full h-full">
        <Condition id={params.id}/>
    </div>
</Layout>