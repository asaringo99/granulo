<script lang="ts">
	import Button from "../../../../../../component/button/Button.svelte";
  import Container from "../../../../../../component/container/Container.svelte";
		import InputNumber from "../../../../../../component/form/InputNumber.svelte";
  import Selectbox from "../../../../../../component/form/Selectbox.svelte";
		import Typography from "../../../../../../component/typography/Typography.svelte";
		import { granuloMessage } from "../../../../../../messages";
		import { granuloBaseMessage } from "../../../../../../messages.base";
		import { settingsState } from "../../../../../../store";
	
		let { settingId }: { settingId: string} = $props();
		let particleSettingState = $settingsState['particle'][settingId];
		let inputMass = $state(particleSettingState.m.i ?? 0);
		let inputRadius = $state(particleSettingState.r ?? 0);
		let selectItems = [
			{value: 1000, label: 'kg/m^3'},
			{value: 1, label: 'g/m^3'},
			{value: 0.001, label: 'mg/m^3'},
			{value: 0.000001, label: 'μg/m^3'},
			{value: 0.000000001, label: 'ng/m^3'},
		]
		let selectedUnit = $state(particleSettingState.m.unit);
		let selectedUnitValue = $state(selectItems.find((s) => s.label === selectedUnit)?.value)
	
		const onclick = () => {
			let unit = selectItems.find((s) => s.value === selectedUnitValue)?.label
			if (unit === undefined || selectedUnitValue === undefined) {
				return;
			}
			settingsState.set({
				...$settingsState,
				['particle']: {
					[settingId]: {
						...$settingsState['particle'][settingId],
						status: {
							now: 'complete',
							progress: 'complete',
						},
						m: {
							i: inputMass,
							unit: unit,
							g: selectedUnitValue * inputMass,
						},
						r: inputRadius,
					}
				}
			})
		}
	</script>
	
<Container kind='col'>
	<Typography
		label={granuloMessage.conditionSettingMassOnParticleStep3}
		weight='bold'
		size=4
	/>
	<Container kind='row' justify='center'>
		<InputNumber bind:inputValue={inputMass} label={"粒子の質量"}/>
		<Selectbox bind:selected={selectedUnitValue} items={selectItems} label="単位" placeholder="選択してください" />
	</Container>
	<Typography
		label={granuloMessage.conditionSettingRadiusOnParticleStep3}
		weight='bold'
		size=4
	/>
	<Container kind='row' justify='center'>
		<InputNumber bind:inputValue={inputRadius} label={"粒子の半径 [-]"}/>
	</Container>
	<Container>
		<Button {onclick}>
			<Typography
			p={2}
			label={granuloBaseMessage.next}
			weight='bold'
			size=4
			/>
		</Button>
	</Container>
</Container>