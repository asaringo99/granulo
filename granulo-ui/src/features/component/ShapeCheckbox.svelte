<script lang="ts">
    import Checkbox from "../../component/form/Checkbox.svelte";
    import Circle from "../../component/contents/Circle.svelte";
    import Rectangle from "../../component/contents/Rectangle.svelte";

    let {name, selected, oncheck} = $props();
    const items: RadioItemType<ShapeType>[] = [
        {
            id: `circle-${name}`,
            label: "Circle",
            value: "circle",
            component: Circle
        },
        {
            id: `rect-${name}`,
            label: "Rectangle",
            value: "rectangle",
            component: Rectangle
        }
    ]
    const label = "Shape"
    const onclick = (e: any) => {
        oncheck(e.target.value);
    }
</script>

<div class="flex justify-center w-full">
    <Checkbox {name} {items} {selected} {onclick} />
</div>