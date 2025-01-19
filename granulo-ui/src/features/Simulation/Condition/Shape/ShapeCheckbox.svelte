<script lang="ts">
    import Checkbox from "../../../../component/form/Checkbox.svelte";
  import Pulldown from "../../../../component/pulldown/Pulldown.svelte";
    import Circle from "./Circle/Circle.svelte";
    import Rectangle from "./Rectangle/Rectangle.svelte";

    let {name, selected, oncheck} = $props();
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
        oncheck(e.target.value);
    }
</script>

<div class="flex justify-center w-full">
    <div class="flex-col text-center w-2/3 items-center">
        <Pulldown label={label}>
            <div slot="children" class="flex justify-center">
                <Checkbox {name} {items} {selected} {onclick} />
            </div>
        </Pulldown>
    </div>
</div>