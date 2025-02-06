<script lang="ts">
	import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { actionLinkedId, canvasArtifact } from '../../store';
  import { routes } from '../../route';

	let color = $state('#333');

	// Props
	let width: number = window.document.documentElement.clientWidth * 0.9;
	let height: number = window.document.documentElement.clientHeight * 0.6;
	let background: string = '#fff';
	
	// Canvas/Context
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	// Canvas位置補正用
	let topFixed = 0;
	let leftFixed = 0;

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		ctx.lineWidth = 1;
		
		handleStart();
	});

	// color が変わるたびに strokeStyle を更新
	$effect(() => {
		if (ctx) {
			ctx.strokeStyle = color;
		}
	})


	// Canvas の位置を取得して補正用変数に代入
	const handleStart = (): void => {
		const { top, left } = canvas.getBoundingClientRect();
		topFixed = top;
		leftFixed = left;
		ctx.strokeRect(0, 0, canvas.width, canvas.height)
		$canvasArtifact.draw(ctx);
	};

	const onclick = (e: MouseEvent) => {
		let { clientX, clientY } = e;
		let offsetX = clientX - leftFixed;
		let offsetY = clientY - topFixed;
		let id = $canvasArtifact.getId(offsetX / canvas.width, offsetY / canvas.height);
		if (id !== null) {
			navigate(routes.simulation.condition.register.url(id));
		}
	}

</script>

<!-- ウィンドウリサイズ検知 -->
<svelte:window on:resize={handleStart} />

<canvas
	{width}
	{height}
	style:background
	bind:this={canvas}
	{onclick}
></canvas>
