<script lang="ts">
    import Checkbox from "../../../component/form/Checkbox.svelte";
    import Force from "./Force/Force.svelte";
    import Particle from "./Particle/Particle.svelte";
    import Solid from "./Solid/Solid.svelte";

    let setting = $state("particle");
    const items: RadioItemType[] = [
        {
            id: "particle",
            label: "Particle",
            value: "particle",
            component: Particle,
        },
        {
            id: "force",
            label: "Force",
            value: "force",
            component: Force,
        },
        {
            id: "solid",
            label: "Solid",
            value: "solid",
            component: Solid,
        },
    ]
    const label = "Setting"
    const name = "setting"
    const onclick = (e: any) => {
        setting = e.target.value;
    }
</script>

<div class="flex justify-center w-full">
    <div class="flex-col text-center w-2/3 items-center">
        <div class="flex justify-center">
            <Checkbox {label} {name} {items} {onclick}/>
        </div>
    </div>
</div>