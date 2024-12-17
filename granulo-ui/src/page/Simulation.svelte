<script lang="ts">
    import SettingCheckbox from "../features/Simulation/Setting/SettingCheckbox.svelte";
    import ShapeCheckbox from "../features/Simulation/Shape/ShapeCheckbox.svelte";
</script>

<div class="flex justify-center w-full">
    <div class="flex-col text-center w-2/3 items-center">
        simulation
        <div class="flex justify-center">
            <ShapeCheckbox />
        </div>
        <div class="flex justify-center">
            <SettingCheckbox />
        </div>
    </div>
</div>