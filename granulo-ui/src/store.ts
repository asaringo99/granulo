import { writable, type Writable } from "svelte/store";

export const settingsState: Writable<Record<string, ActionSetting>> = writable({});