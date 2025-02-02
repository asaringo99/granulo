<script lang="ts">
	let { label, size = 'defualt', weight = 'default', position = 'center'}: {
		label: string,
		size?: 'defualt' | 'small' | 'lerge',
		weight?: 'default' | 'thin' | 'bold',
		position?: 'center' | 'left' |  'right',
	} = $props();
	const sizeStyle = size === 'small'
		? "text-sm" : size === 'lerge'
		? "text-lg" : null;
	const weightStyle = weight === 'thin'
		? "font-light" : weight === 'bold'
		? "font-bold" : null;
	const positionStyle = position === 'left'
		? "text-left" : position === 'right'
		? "text-right" : "text-center";
</script>

<div
	class="
		w-full p-4
		{sizeStyle}
		{weightStyle}
		{positionStyle}
		"
	>
	{label}
</div>