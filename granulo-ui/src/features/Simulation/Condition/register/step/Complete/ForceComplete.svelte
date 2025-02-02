<script lang="ts">
	import { actionLinkedId, settingsState } from "../../../../../../store";
  import { granuloMessage } from "../../../../../../messages";
  import Button from "../../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../../messages.base";
  import Typography from "../../../../../../component/typography/Typography.svelte";
  import Container from "../../../../../../component/container/Container.svelte";

	let { settingId }: { settingId: string } = $props();
	let forceAction = $settingsState['force'][settingId];
</script>

<Container p={6}>
	<Typography
		label={granuloMessage.conditionSettingConfirmTextOnComplete}
		weight='bold'
		size='lerge'
	/>
	<Container width="8/12" p={1} border="border-y" borderColor="border-gray-500">
		<Container p={2}>
			<Container basis='2/12'>
				<Typography
					label="外力F"
					weight="bold"
				/>
			</Container>
			<Container basis='3/12' kind='col'>
				<Typography
				label="X方向"
				weight="bold"
				/>
				<div class="border border-gray-500 w-full"></div>
				<Typography
				label="Y方向"
				weight="bold"
				/>
			</Container>
			<Container basis='7/12' kind='col'>
				<Typography
					label="{forceAction.f.x} [kg・m/s^2]"
					weight="bold"
				/>
				<div class="border border-gray-500 w-full"></div>
				<Typography
					label="{forceAction.f.y} [kg・m/s^2]"
					weight="bold"
				/>
			</Container>
		</Container>
	</Container>
	<Container p={4}>
		<Button onclick={()=>{}}>
			<Typography
				label={granuloBaseMessage.decide}
				weight='bold'
				size='lerge'
			/>
		</Button>
	</Container>
</Container>