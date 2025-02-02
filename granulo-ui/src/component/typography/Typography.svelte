<script lang="ts">
	let { label, p, m, size = 'defualt', weight = 'default', position = 'center'}: {
		label: string,
		p?: number,
		m?: number
		size?: 'defualt' | 'small' | 'large',
		weight?: 'default' | 'thin' | 'bold',
		position?: 'center' | 'left' |  'right',
	} = $props();
	const sizeStyle = size === 'small'
		? "text-sm" : size === 'large'
		? "text-xl" : null;
	const weightStyle = weight === 'thin'
		? "font-light" : weight === 'bold'
		? "font-bold" : null;
	const positionStyle = position === 'left'
		? "text-left" : position === 'right'
		? "text-right" : "text-center";
</script>

<div
	class="
		w-full
		{p && `p-${p}`}
		{m && `m-${m}`}
		{sizeStyle}
		{weightStyle}
		{positionStyle}
		"
	>
	{label}
</div>