<script lang="ts">
    import Button from "../../../component/button/Button.svelte";
    import ActionCheckbox from "./Action/Action.svelte";
    import ShapeCheckbox from "./Shape/ShapeCheckbox.svelte";
    type Setting = {
        shape: 'circle' | 'rectangle',
        action: 'particle' | 'force' | 'solid',
    }
    let settings: Setting[] = $state([]);

    const onclick = () => {
        settings = [...settings, {shape: "circle", action: "particle"}];
    }

    const oncheck = (settingType: 'shape' | 'action', value: string, idx: number) => {
        settings = settings.map((setting, i) => {
            if (i !== idx) {
                return setting
            }
            return {
                ...setting,
                [settingType]: value,
            }
        })
    }
</script>

<div class="w-full flex flex-col items-center">
    {#each settings as setting, i}
        <div class="flex justify-center w-full rounded-2xl p-4">
            <div class="flex-col text-center w-2/3 items-center">
                No {i+1}. Condition
                <div class="flex justify-center p-4">
                    <ShapeCheckbox
                        oncheck={(value: string) => oncheck('shape', value, i)}
                        selected={setting.shape}
                        name={`shape-${i}`}
                    />
                </div>
                <div class="flex justify-center p-4">
                    <ActionCheckbox
                        oncheck={(value: string) => oncheck('action', value, i)}
                        selected={setting.action}
                        name={`action-${i}`}
                    />
                </div>
            </div>
        </div>
        <hr class=" w-11/12 border-black p-4">
    {/each}
    <div class="w-10/12">
        <Button {onclick} label="+" />
    </div>
</div>