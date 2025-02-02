<script lang="ts">
    let {
        onclick,
        size='medium',
        color='primary',
        shape='rectangle',
    }: {
        onclick: () => void,
        size?: 'small' | 'medium' | 'large',
        color?: 'primary' | 'secondary' | 'alert',
        shape?: 'circle' | 'rectangle',
    } = $props();

    const sizeClass = {
        'small': 'px-4 py-1 m-1',
        'medium': 'px-6 py-2',
        'large': 'px-8 py-3 m-3'
    }[size]
    
    const colorClass = {
        'primary': 'bg-blue-400 hover:bg-blue-500 hover:text-gray-50',
        'secondary': 'bg-gray-200 hover:bg-gray-600 hover:text-gray-50',
        'alert': 'bg-red-400 hover:bg-red-600 hover:text-gray-50'
    }[color]

    const shapeClass = {
        'circle': 'rounded-full aspect-square',
        'rectangle': 'rounded-xl',
    }[shape]

</script>

<div>
    <button
        class="flex justify-center items-center w-full h-full transition duration-300 drop-shadow-sm shadow-sm shadow-slate-300 {sizeClass} {colorClass} {shapeClass}"
        {onclick}
    >
        <slot></slot>
    </button>
</div>