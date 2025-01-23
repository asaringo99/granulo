<script lang="ts">
	import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

	let { target }: { target: CanvasArtifact } = $props()
	let color = $state('#333');

	// Props
	let width: number = 600;
	let height: number = 600;
	let background: string = '#fff';
	
	// Canvas/Context
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let raf: number;

	// 描画フラグや座標管理用
	let isDrawing = false;
	let start: { x: number; y: number } | null = null;

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
		ctx.strokeRect(0, 0, canvas.height, canvas.width)
		target.draw(ctx);
	};

	const onclick = (e: MouseEvent) => {
		console.log(typeof e)
		let { clientX, clientY } = e;
		let offsetX = clientX - leftFixed;
		let offsetY = clientY - topFixed;
		let path = target.getPath(offsetX, offsetY);
		if (path !== null) {
			navigate(path);
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
