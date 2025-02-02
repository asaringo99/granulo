import { lang } from "./state.svelte"

enum MessageCode {
	CONDITION_SETTING_DESCRIPTION_ON_STEP1 = "conditionSettingDescriptionOnStep1",
	CONDITION_SETTING_COORDINATE_DESCRIPTION_ON_FORCE_STEP2 = "conditionSettingCoordinateDescriptionOnForceStep2",
	CONDITION_SETTING_APPLYING_FORCE_AREA_ON_FORCE_STEP2 = "conditionSettingApplyingForceAreaOnForceStep2",
	CONDITION_SETTING_FORCE_DESCRIPTION_ON_FORCE_STEP2 = "conditionSettingForceDescriptionOnForceStep2",
	CONDITION_SETTING_CONFIRM_TEXT_ON_COMPLETE = "conditionSettingConfirmTextOnComplete",
};

type localeType = 'ja' | 'en'

type messageLocale = {
	[key in localeType]: string
}

const message: Record<MessageCode, messageLocale> = {
	[MessageCode.CONDITION_SETTING_DESCRIPTION_ON_STEP1]: {
		ja: "2D平面に配置するコンポーネントを選択してください。",
		en: "Select a component waht you assign on 2D plane",
	},
	[MessageCode.CONDITION_SETTING_COORDINATE_DESCRIPTION_ON_FORCE_STEP2]: {
		ja: "外力Fを与える座標を入力してください",
		en: "Input a coordinate on 2D plane to apply external force F",
	},
	[MessageCode.CONDITION_SETTING_APPLYING_FORCE_AREA_ON_FORCE_STEP2]: {
		ja: "外力Fを適用するエリアを選択してください",
		en: "",
	},
	[MessageCode.CONDITION_SETTING_FORCE_DESCRIPTION_ON_FORCE_STEP2]: {
		ja: "外力Fを設定してください",
		en: "Input external force F on 2D plane selected coordinates",
	},
	[MessageCode.CONDITION_SETTING_CONFIRM_TEXT_ON_COMPLETE]: {
		ja: "入力事項が誤っていないか確認してください",
		en: "Check if the information entered is correct.",
	},
}

export const granuloMessage: Record<MessageCode, string> = {
	[MessageCode.CONDITION_SETTING_DESCRIPTION_ON_STEP1]: message.conditionSettingDescriptionOnStep1[lang],
	[MessageCode.CONDITION_SETTING_COORDINATE_DESCRIPTION_ON_FORCE_STEP2]: message.conditionSettingCoordinateDescriptionOnForceStep2[lang],
	[MessageCode.CONDITION_SETTING_APPLYING_FORCE_AREA_ON_FORCE_STEP2]: message.conditionSettingApplyingForceAreaOnForceStep2[lang],
	[MessageCode.CONDITION_SETTING_FORCE_DESCRIPTION_ON_FORCE_STEP2]: message.conditionSettingForceDescriptionOnForceStep2[lang],
	[MessageCode.CONDITION_SETTING_CONFIRM_TEXT_ON_COMPLETE]: message.conditionSettingConfirmTextOnComplete[lang],
}