<script lang="ts">
    import Button from "../../component/button/Button.svelte";
    import ActionCheckbox from "./Action/Action.svelte";
    import ShapeCheckbox from "./Shape/ShapeCheckbox.svelte";
    type Setting = {
        shape: string,
        action: string,
    }
    let settings: Setting[] = $state([]);

    const onclick = () => {
        settings.push({
            shape: "circle",
            action: "particle"
        });
    }
</script>

<div>
    {#each settings as setting, i}
        <div class="flex justify-center w-full border border-black rounded-2xl p-4 m-4">
            <div class="flex-col text-center w-2/3 items-center">
                No {i+1}. Condition
                <div class="flex justify-center">
                    <ShapeCheckbox setting={setting.shape} name={`shape-${i}`}/>
                </div>
                <div class="flex justify-center">
                    <ActionCheckbox setting={setting.action} name={`action-${i}`}/>
                </div>
            </div>
        </div>
    {/each}
    <Button {onclick} label="+" />
</div>