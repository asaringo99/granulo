<script lang="ts">
    let {
        onclick,
        label,
        size='medium',
        color='primary'
    }: {
        onclick: () => void,
        label: string,
        size?: 'small' | 'medium' | 'large',
        color?: 'primary' | 'secondary' | 'alert',
    } = $props();

    const sizeClass = {
        'small': 'px-4 py-1 m-1',
        'medium': 'px-6 py-2 m-2',
        'large': 'px-8 py-3 m-3'
    }[size]
    
    const colorClass = {
        'primary': 'bg-blue-200 hover:bg-blue-500 hover:text-gray-50',
        'secondary': 'bg-gray-200 hover:bg-gray-600 hover:text-gray-50',
        'alert': 'bg-red-200 hover:bg-red-600 hover:text-gray-50'
    }[color]

</script>

<button
    {onclick}
    class="{sizeClass} {colorClass} border-black border rounded-xl transition duration-300 drop-shadow-sm shadow-sm shadow-slate-300 ring-1"
>
    {label}
</button>