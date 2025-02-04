type RadioItemValueType = string

declare type RadioItemType<T extends RadioItemValueType> = {
    id: string,
    label: string,
    value: T,
    component?: Component
}

declare type RadioType<T extends RadioItemValueType = string> = {
    name: string,
    items: RadioItemType<T>[],
    selected: string
    hidden?: boolean,
    onclick?: (e: any) => void,
}

declare type TabType = {
    label: string,
    component: Component,
}
