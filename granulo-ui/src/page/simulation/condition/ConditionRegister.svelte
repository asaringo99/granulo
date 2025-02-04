<script lang="ts">
    import Layout from "../../../features/Layout.svelte";
    import Register from "../../../features/simulation/condition/register/Register.svelte";

    let { params } = $props();
</script>

<Layout>
    <div class="flex justify-center items-center w-full h-full">
        <Register id={params.id}/>
    </div>
</Layout>