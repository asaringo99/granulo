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

type Key<Items extends readonly object[], Key extends PropertyKey> =
  Items extends [infer F, ...infer Last] // タプルの最初の要素と残りを分割
    ? F extends Record<Key, any> // F が Key を持つかチェック
      ? Last extends readonly object[] // 残りの配列を再帰処理
        ? F[Key] | Key<Last, Key>
        : F[Key]
      : null
    : null;

let items = [{value: "dd", label: "la"}, {value: 'dddd', label: "kfs"}]

type K = (typeof items)[number]['value']