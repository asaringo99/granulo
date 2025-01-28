import { lang } from "./state.svelte"

enum MessageCode {
	CONDITION_SETTING_DESCRIPTION_FOR_STEP1 = "conditionSettingDescriptionForStep1",
	CONDITION_SETTING_COORDINATE_DESCRIPTION_FOR_FORCE_STEP2 = "conditionSettingCoordinateDescriptionForForceStep2",
	CONDITION_SETTING_FORCE_DESCRIPTION_FOR_FORCE_STEP2 = "conditionSettingForceDescriptionForForceStep2",
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
	[MessageCode.CONDITION_SETTING_COORDINATE_DESCRIPTION_FOR_FORCE_STEP2]: {
		ja: "外力Fを与える座標を入力してください",
		en: "Input a coordinate on 2D plane to apply external force F",
	},
	[MessageCode.CONDITION_SETTING_FORCE_DESCRIPTION_FOR_FORCE_STEP2]: {
		ja: "外力Fを入力してください",
		en: "Input external force F on 2D plane selected coordinates",
	},
}

export const granuloMessage: Record<MessageCode, string> = {
	[MessageCode.CONDITION_SETTING_DESCRIPTION_FOR_STEP1]: message.conditionSettingDescriptionForStep1[lang],
	[MessageCode.CONDITION_SETTING_COORDINATE_DESCRIPTION_FOR_FORCE_STEP2]: message.conditionSettingCoordinateDescriptionForForceStep2[lang],
	[MessageCode.CONDITION_SETTING_FORCE_DESCRIPTION_FOR_FORCE_STEP2]: message.conditionSettingForceDescriptionForForceStep2[lang],
}