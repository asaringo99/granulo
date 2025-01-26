import { lang } from "./state.svelte"

enum MessageCode {
	DECIDE = "decide",
};

type localeType = 'ja' | 'en'

type messageLocale = {
	[key in localeType]: string
}

const message: Record<MessageCode, messageLocale> = {
	[MessageCode.DECIDE]: {
		ja: "決定する",
		en: "Decide",
	}
}

export const granuloBaseMessage: Record<MessageCode, string> = {
	[MessageCode.DECIDE]: message.decide[lang]
}