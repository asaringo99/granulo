<script lang="ts">
    import { v4 as uuidv4 } from 'uuid';
    import Button from "../../../component/button/Button.svelte";
    import AddIcon from '../../../component/icon/AddIcon.svelte';
    import DeleteIcon from '../../../component/icon/DeleteIcon.svelte';
    import ShapeCheckbox from '../../../component/ShapeCheckbox.svelte';
    import ActionCheckbox from '../../../component/ActionCheckbox.svelte';
    type Setting = {
        id: string,
        shape: 'circle' | 'rectangle',
        action: 'particle' | 'force' | 'solid',
    }
    let settings: Setting[] = $state([]);

    const onclick = () => {
        settings = [...settings, {id: uuidv4(), shape: "circle", action: "particle"}];
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

    const onclickDelete = (idx: number) => {
        settings = settings.filter((_, i) => i !== idx)
    }
</script>

<div class="w-full h-full flex flex-col items-center justify-center">
    {#each settings as setting, i (setting.id)}
        <div class="w-full h-full p-4 flex justify-center items-center">
            <div class="flex-col text-center items-center">
                No.{i+1} Condition
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
            <Button onclick={() => onclickDelete(i)} shape="circle" color="alert" size='small'>
                <div slot="children">
                    <DeleteIcon height="24px" width="24px"/>
                </div>
            </Button>
        </div>
        <hr class=" w-11/12 border-black p-4">
    {/each}
    <div class="w-10/12">
        <Button {onclick}>
            <div slot="children">
                <AddIcon height="24px" width="24px"/>
            </div>
        </Button>
    </div>
</div>