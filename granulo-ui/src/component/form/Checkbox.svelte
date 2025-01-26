<script lang="ts">
    import { v4 as uuidv4 } from 'uuid';

    const {name, onclick, items, selected}: RadioType = $props();
    let firstSelectedId = items.reduce((pre, item, id) =>  item.value === selected ? id : pre, -1);

    const uuid = uuidv4();
    let selectedId = $state(firstSelectedId);
</script>

<fieldset class="w-full rounded p-2 flex justify-center">
    <div class="w-1/2 flex justify-around items-center">
        {#each items as item, i}
            <div class="p-4 m-2 hover:bg-blue-300 text-center transition duration-200 rounded-2xl {i === selectedId && "bg-blue-100 border border-gray-500"}">
                <input
                    type="radio"
                    id="{item.id}"
                    class="hidden"
                    name="{name}-{uuid}"
                    value="{item.value}"
                    checked={i === selectedId}
                    onclick={(e) => {
                        selectedId = i
                        onclick && onclick(e);
                    }}
                >
                <label for="{item.id}" class="text-xl">
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