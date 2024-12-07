declare module '*.svelte' {
    import { SvelteComponentTyped } from 'svelte';
    export default class Component extends SvelteComponentTyped<
        Record<string, any>,
        Record<string, CustomEvent<any>>,
        Record<string, any>
    > {}
}
