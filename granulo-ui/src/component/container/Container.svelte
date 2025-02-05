<script lang="ts">
	let {
		width = 'w-full',
		height,
		justify = 'center',
		items = 'center',
		kind = 'row',
		p = 2,
		m,
		border,
		basis,
		bgColor,
		borderColor,
		rounded,
	}: {
		width?: Width,
		height?: Height,
		justify?: Arrange,
		items?: Extract<Arrange, 'center' | 'stretch' | 'start' | 'end'>,
		kind?: 'row' | 'col',
		p?: number,
		m?: number,
		border?: Border
		basis?: Basis,
		bgColor?: BackgroundColor,
		borderColor?: BorderColor,
		rounded?: Rounded
	} = $props();
</script>

<div class="
	{width}
	{height}
	flex
	flex-{kind}
	justify-{justify}
	items-{items}
	p-{p}
	m-{m}
	{border}
	{basis}
	{bgColor}
	{borderColor}
	{rounded}
	"
>
	<slot></slot>
</div>