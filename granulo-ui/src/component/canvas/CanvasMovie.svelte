<script lang="ts">
	import { onMount } from 'svelte';

	let { target }: { target: CanvasDrawer } = $props()
	let color = $state('#333');

	// Props
	let width: number = 600;
	let height: number = 600;
	let background: string = '#fff';
	
	// Canvas/Context
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let raf: number;

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
		console.log(top, left)
		topFixed = top;
		leftFixed = left;
		ctx.strokeRect(0, 0, canvas.height, canvas.width)
	};

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.strokeRect(0, 0, canvas.width, canvas.height)
		target.draw(ctx);
		target.next();
		raf = window.requestAnimationFrame(draw);
	}

	function cancel() {
		window.cancelAnimationFrame(raf);
	}

</script>

<!-- ウィンドウリサイズ検知 -->
<svelte:window on:resize={handleStart} />

<canvas
	{width}
	{height}
	style:background
	bind:this={canvas}

	onmousedown={draw}
	onmouseup={cancel}
></canvas>
