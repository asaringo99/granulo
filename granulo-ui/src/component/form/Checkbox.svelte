<script lang="ts">
    import { v4 as uuidv4 } from 'uuid';

    const {label, name, onclick, items}: RadioType = $props();

    const uuid = uuidv4();
    let selectedId = $state(0);
</script>

<fieldset class="w-full rounded border border-black p-4 flex justify-center">
    <legend class="text-center">{label}</legend>
    <div class="flex">
        {#each items as item, i}
            <div class="p-4 m-2 hover:bg-blue-300 text-center transition duration-200 rounded-2xl {i === selectedId && "bg-blue-100 border border-gray-500"}">
                <input
                    type="radio"
                    id="{item.id}"
                    class="hidden"
                    name="{name}-{uuid}"
                    value="{item.value && item.value}"
                    checked={i === selectedId}
                    onclick={(e) => {
                        selectedId = i
                        onclick && onclick(e);
                    }}
                >
                <label for="{item.id}">
                    {item.label}
                </label>
                {#if item.component}
                    <label for="{item.id}" class="flex justify-center">
                        <item.component/>
                    </label>
                {/if}
            </div>
        {/each}
    </div>
</fieldset>