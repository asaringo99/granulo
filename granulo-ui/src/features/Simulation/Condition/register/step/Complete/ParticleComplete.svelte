<script lang="ts">
	import { actionLinkedId, conditionsState } from "../../../../../../store";
  import { granuloMessage } from "../../../../../../messages";
  import Button from "../../../../../../component/button/Button.svelte";
  import { granuloBaseMessage } from "../../../../../../messages.base";
  import Typography from "../../../../../../component/typography/Typography.svelte";
  import Container from "../../../../../../component/container/Container.svelte";
  import { navigate } from "svelte-routing";
  import { routes } from "../../../../../../route";

	let { settingId }: { settingId: string } = $props();
	let particleAction = $conditionsState['particle'][settingId];
	const onclick = () => {
		conditionsState.set({
			...$conditionsState,
			particle: {
				...$conditionsState['particle'],
				[settingId]: {
					...$conditionsState['particle'][settingId],
					commit: true,
				}
			}
		})
		navigate(routes.simulation.condition.view.url());
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
					label="粒子"
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
			{#if particleAction.overall === false && particleAction.pos !== undefined}
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
						label="{particleAction.pos.x} [-]"
						weight="bold"
					/>
					<div class="border border-gray-500 w-full"></div>
					<Typography
						label="{particleAction.pos.y} [-]"
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
	
	<!-- 粒子数 -->
	<Container width="w-8/12" p={3} border="border-y" borderColor="border-gray-500">
		<Container p={2}>
			<Container basis='basis-2/12'>
				<Typography
					label="粒子数"
					weight="bold"
				/>
			</Container>
			<Container basis='basis-10/12' kind='col'>
				<Typography
					label="{particleAction.num} 個"
					weight="bold"
				/>
			</Container>
		</Container>
	</Container>
	
	<!-- 粒子の質量 -->
	<Container width="w-8/12" p={3} border="border-y" borderColor="border-gray-500">
		<Container p={2}>
			<Container basis='basis-2/12'>
				<Typography
					label="質量"
					weight="bold"
				/>
			</Container>
			<Container basis='basis-10/12' kind='col'>
				<Typography
					label="{particleAction.m.i} [{particleAction.m.unit}]"
					weight="bold"
				/>
			</Container>
		</Container>
	</Container>

	<!-- 粒子の半径 -->
	<Container width="w-8/12" p={3} border="border-y" borderColor="border-gray-500">
		<Container p={2}>
			<Container basis='basis-2/12'>
				<Typography
					label="半径"
					weight="bold"
				/>
			</Container>
			<Container basis='basis-10/12' kind='col'>
				<Typography
					label="{particleAction.r} [-]"
					weight="bold"
				/>
			</Container>
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