declare type RadioItemType = {
    id: string,
    label: string,
    value: string,
    component?: Component
}

declare type RadioType = {
    name: string,
    items: RadioItemType[],
    selected: string
    hidden?: boolean,
    onclick?: (e: any) => void,
}

declare type TabType = {
    label: string,
    component: Component,
}