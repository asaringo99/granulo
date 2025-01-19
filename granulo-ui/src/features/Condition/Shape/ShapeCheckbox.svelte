<script lang="ts">
    import Checkbox from "../../../component/form/Checkbox.svelte";
    import Circle from "./Circle/Circle.svelte";
    import Rectangle from "./Rectangle/Rectangle.svelte";

    let {setting, name} = $props();
    const items: RadioItemType[] = [
        {
            id: `circle-${name}`,
            label: "Circle",
            value: "circle",
            component: Circle
        },
        {
            id: `rect-${name}`,
            label: "Rectangle",
            value: "rect",
            component: Rectangle
        }
    ]
    const label = "Shape"
    const onclick = (e: any) => {
        setting = e.target.value;
    }
</script>

<div class="flex justify-center w-full">
    <div class="flex-col text-center w-2/3 items-center">
        <div class="flex justify-center">
            <Checkbox {label} {name} {items} {onclick} />
        </div>
    </div>
</div>