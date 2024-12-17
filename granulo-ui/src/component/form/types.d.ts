declare type RadioItemType = {
    id: string,
    label: string,
    value?: string,
    component?: Component
}

declare type RadioType = {
    label: string,
    name: string,
    items: RadioItemType[],
    hidden?: boolean,
    onclick?: (e: any) => void,
}