<script lang="ts">
	let { label, p, m, width, size = 'defualt', weight = 'default', position = 'center'}: {
		label: string,
		p?: number,
		m?: number
		width?: Width,
		size?: 'defualt' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
		weight?: 'default' | 'thin' | 'bold',
		position?: 'center' | 'left' |  'right',
	} = $props();
	const sizeStyle = size === '1'
		? "text-xs" : size === '2'
		? "text-sm" : size === '3'
		? "text-lg" : size === '4'
		? "text-xl" : size === '5'
		? "text-2xl" : size === '6'
		? "text-3xl" : size === '7'
		? "text-4xl" : size === '8'
		? "text-5xl" : size === '9'
	const weightStyle = weight === 'thin'
		? "font-light" : weight === 'bold'
		? "font-bold" : null;
	const positionStyle = position === 'left'
		? "text-left" : position === 'right'
		? "text-right" : "text-center";
</script>

<div
	class="
		{width}
		p-{p}
		m-{m}
		{sizeStyle}
		{weightStyle}
		{positionStyle}
		"
	>
	{label}
</div>