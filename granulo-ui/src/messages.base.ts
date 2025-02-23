import { lang } from "./state.svelte"

enum MessageCode {
	DECIDE = "decide",
	NEXT = "next",
	CONFIRM = "confirm",
	BACK = "back",
};

type localeType = 'ja' | 'en'

type messageLocale = {
	[key in localeType]: string
}

const message: Record<MessageCode, messageLocale> = {
	[MessageCode.DECIDE]: {
		ja: "決定する",
		en: "Decide",
	},
	[MessageCode.NEXT]: {
		ja: "次に進む →",
		en: "Next",
	},
	[MessageCode.CONFIRM]: {
		ja: "確認する",
		en: "Confirm",
	},
	[MessageCode.BACK]: {
		ja: "戻る",
		en: "Back",
	},
}

export const granuloBaseMessage: Record<MessageCode, string> = {
	[MessageCode.DECIDE]: message.decide[lang],
	[MessageCode.NEXT]: message.next[lang],
	[MessageCode.CONFIRM]: message.confirm[lang],
	[MessageCode.BACK]: message.back[lang],
}