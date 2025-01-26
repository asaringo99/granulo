import { lang } from "./state.svelte"

enum MessageCode {
	CONDITION_SETTING_FIRST_DESCRIPTION = "conditionSettingFirstDescription",
};

type localeType = 'ja' | 'en'

type messageLocale = {
	[key in localeType]: string
}

const message: Record<MessageCode, messageLocale> = {
	[MessageCode.CONDITION_SETTING_FIRST_DESCRIPTION]: {
		ja: "2D平面に配置するコンポーネントを選択してください。",
		en: "Select a component waht you assign on 2D",
	}
}

export const granuloMessage: Record<MessageCode, string> = {
	[MessageCode.CONDITION_SETTING_FIRST_DESCRIPTION]: message.conditionSettingFirstDescription[lang]
}