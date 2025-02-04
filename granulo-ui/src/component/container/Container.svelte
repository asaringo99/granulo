<script lang="ts">
	let {
		width = 'w-full',
		justify = 'center',
		items = 'center',
		kind = 'row',
		p = 4,
		m = 4,
		border,
		basis,
		bgColor,
		borderColor,
	}: {
		width?: Width,
		justify?: Arrange,
		items?: Extract<Arrange, 'center' | 'stretch' | 'start' | 'end'>,
		kind?: 'row' | 'col',
		p?: number,
		m?: number,
		border?: Border
		basis?: Basis,
		bgColor?: BackgroundColor,
		borderColor?: BorderColor,
	} = $props();
</script>

<div class="
	{width}
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
	"
>
	<slot></slot>
</div>