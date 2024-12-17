<script lang="ts">
    import Checkbox from "../../../component/form/Checkbox.svelte";
    import Circle from "./Circle.svelte";
    import Rectangle from "./Rectangle.svelte";

    const items: RadioItemType[] = [
        {
            id: "circle",
            label: "Circle",
            value: "circle",
            component: Circle
        },
        {
            id: "rect",
            label: "Rectangle",
            value: "rect",
            component: Rectangle
        }
    ]
    const label = "Shape"
    const name = "shape"
</script>

<div class="flex justify-center w-full">
    <div class="flex-col text-center w-2/3 items-center">
        <div class="flex justify-center">
            <Checkbox {label} {name} {items} />
        </div>
    </div>
</div>