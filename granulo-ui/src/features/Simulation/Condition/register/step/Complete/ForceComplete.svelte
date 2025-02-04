<script lang="ts">
	import { conditionsState } from "../../../../../../store";
  import { granuloMessage } from "../../../../../../messages";
  import Button from "../../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../../messages.base";
  import Typography from "../../../../../../component/typography/Typography.svelte";
  import Container from "../../../../../../component/container/Container.svelte";
  import { navigate } from "svelte-routing";
  import { routes } from "../../../../../../route";

	let { settingId }: { settingId: string } = $props();
	let forceAction = $conditionsState['force'][settingId];
	const onclick = () => {
		conditionsState.set({
			...$conditionsState,
			force: {
				[settingId]: {
					...$conditionsState['force'][settingId],
					commit: true,
				}
			}
		})
		navigate(routes.simulation.condition.view.url())
	}
</script>

<Container p={6} kind='col'>
	<Typography
		label={granuloMessage.conditionSettingConfirmTextOnComplete}
		weight='bold'
		size=4
		p={8}
	/>

	<!-- コンポーネント -->
	<Container width="w-8/12" p={3} border="border-y" borderColor="border-gray-500">
		<Container p={2}>
			<Container basis='basis-2/12'>
				<Typography
					label="作用"
					weight="bold"
				/>
			</Container>
			<Container basis='basis-10/12' kind='col'>
				<Typography
					label="外力"
					weight="bold"
				/>
			</Container>
		</Container>
	</Container>

	<!-- 外力 -->
	<Container width="w-8/12" p={3} border="border-y" borderColor="border-gray-500">
		<Container p={2}>
			<Container basis='basis-2/12'>
				<Typography
					label="外力F"
					weight="bold"
				/>
			</Container>
			<Container basis='basis-3/12' kind='col'>
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
			<Container basis='basis-7/12' kind='col'>
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

	<!-- 座標 -->
	<Container width="w-8/12" p={3} border="border-y" borderColor="border-gray-500">
		<Container p={2}>
			<Container basis='basis-2/12'>
				<Typography
					label="配置"
					weight="bold"
				/>
			</Container>
			{#if forceAction.overall === false && forceAction.pos !== undefined}
				<Container basis='basis-3/12' kind='col'>
					<Typography
					label="X座標"
					weight="bold"
					/>
					<div class="border border-gray-500 w-full"></div>
					<Typography
					label="Y座標"
					weight="bold"
					/>
				</Container>
				<Container basis='basis-7/12' kind='col'>
					<Typography
						label="{forceAction.pos.x} [-]"
						weight="bold"
					/>
					<div class="border border-gray-500 w-full"></div>
					<Typography
						label="{forceAction.pos.y} [-]"
						weight="bold"
					/>
				</Container>
				{:else}
				<Container basis='basis-10/12' kind='col'>
					<Typography
						label="Overall（全体）"
						weight="bold"
					/>
				</Container>
				
			{/if}
		</Container>
	</Container>
	<Container p={4}>
		<Button {onclick}>
			<Typography
				label={granuloBaseMessage.decide}
				weight='bold'
				size=4
			/>
		</Button>
	</Container>
</Container>