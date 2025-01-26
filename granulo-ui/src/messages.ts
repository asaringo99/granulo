import { lang } from "./state.svelte"

enum MessageCode {
	CONDITION_SETTING_DESCRIPTION_FOR_STEP1 = "conditionSettingDescriptionForStep1",
	CONDITION_SETTING_DESCRIPTION_FOR_FORCE_STEP2 = "conditionSettingDescriptionForForceStep2",
};

type localeType = 'ja' | 'en'

type messageLocale = {
	[key in localeType]: string
}

const message: Record<MessageCode, messageLocale> = {
	[MessageCode.CONDITION_SETTING_DESCRIPTION_FOR_STEP1]: {
		ja: "2D平面に配置するコンポーネントを選択してください。",
		en: "Select a component waht you assign on 2D plane",
	},
	[MessageCode.CONDITION_SETTING_DESCRIPTION_FOR_FORCE_STEP2]: {
		ja: "外力Fを与えるロケーションを選択してください",
		en: "Select a location on 2D plane to apply external force F",
	}
}

export const granuloMessage: Record<MessageCode, string> = {
	[MessageCode.CONDITION_SETTING_DESCRIPTION_FOR_STEP1]: message.conditionSettingDescriptionForStep1[lang],
	[MessageCode.CONDITION_SETTING_DESCRIPTION_FOR_FORCE_STEP2]: message.conditionSettingDescriptionForForceStep2[lang],
}