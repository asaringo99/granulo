<script lang="ts">
    import Checkbox from "../../../../component/form/Checkbox.svelte";
    import Pulldown from "../../../../component/pulldown/Pulldown.svelte";
    import Force from "../../../../component/contents/Force/Force.svelte";
    import Particle from "../../../../component/contents/Particle/Particle.svelte";
    import Solid from "../../../../component/contents/Solid/Solid.svelte";

    let {oncheck, selected, name} = $props()
    const items: RadioItemType[] = [
        {
            id: `particle-${name}`,
            label: "Particle",
            value: "particle",
            component: Particle,
        },
        {
            id: `force-${name}`,
            label: "Force",
            value: "force",
            component: Force,
        },
        {
            id: `solid-${name}`,
            label: "Solid",
            value: "solid",
            component: Solid,
        },
    ]
    const label = "Setting"
    const onclick = (e: any) => {
        oncheck(e.target.value);
    }
</script>

<div class="flex justify-center w-full">
    <div class="flex-col text-center w-2/3 items-center">
        <Pulldown label={label}>
            <div slot="children" class="flex justify-center">
                <Checkbox {name} {items} {selected} {onclick}/>
            </div>
        </Pulldown>
    </div>
</div>