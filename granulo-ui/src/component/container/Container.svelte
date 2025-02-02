<script lang="ts">
	let {
		width = 'full',
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
		width?: Size,
		justify?: Arrange,
		items?: Extract<Arrange, 'center' | 'stretch' | 'start' | 'end'>,
		kind?: 'row' | 'col',
		p?: number,
		m?: number,
		border?: Border
		basis?: Size,
		bgColor?: BackgroundColor,
		borderColor?: BorderColor,
	} = $props();
</script>

<div class="
	w-{width}
	flex
	flex-{kind}
	justify-{justify}
	items-{items}
	p-{p}
	m-{m}
	{border}
	{basis && `basis-${basis}`}
	{bgColor}
	{borderColor}
	"
>
	<slot></slot>
</div>