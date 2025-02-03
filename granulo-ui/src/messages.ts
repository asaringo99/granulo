import { lang } from "./state.svelte"

enum MessageCode {
	// 条件ラベル
	CONDITION_SETTING_DESCRIPTION_ON_STEP1 = "conditionSettingDescriptionOnStep1",

	// 粒子
	CONDITION_SETTING_APPLYING_PARTICLE_AREA_ON_PARTICLE_STEP2 = "conditionSettingApplyingParticleAreaOnParticleStep2",
	CONDITION_SETTING_COORDINATE_DESCRIPTION_ON_PARTICLE_STEP2 = "conditionSettingCoordinateDescriptionOnParticleStep2",
	CONDITION_SETTING_PARTICLE_NUMBER_ON_PARTICLE_STEP2 = "conditionSettingParticleNumberOnParticleStep2",
	CONDITION_SETTING_MASS_ON_PARTICLE_STEP3 = "conditionSettingMassOnParticleStep3",
	CONDITION_SETTING_RADIUS_ON_PARTICLE_STEP3 = "conditionSettingRadiusOnParticleStep3",

	// 外力F
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
	// 条件ラベル
	[MessageCode.CONDITION_SETTING_DESCRIPTION_ON_STEP1]: {
		ja: "2D平面に配置するコンポーネントを選択してください。",
		en: "Select a component waht you assign on 2D plane",
	},

	// 粒子
	[MessageCode.CONDITION_SETTING_APPLYING_PARTICLE_AREA_ON_PARTICLE_STEP2]: {
		ja: "粒子を配置するエリアを選択してください",
		en: "",
	},
	[MessageCode.CONDITION_SETTING_COORDINATE_DESCRIPTION_ON_PARTICLE_STEP2]: {
		ja: "粒子を与える座標を入力してください",
		en: "Input a coordinate on 2D plane to arrange particles",
	},
	[MessageCode.CONDITION_SETTING_PARTICLE_NUMBER_ON_PARTICLE_STEP2]: {
		ja: "与える粒子数を入力してください",
		en: "Input a particle number",
	},
	[MessageCode.CONDITION_SETTING_MASS_ON_PARTICLE_STEP3]: {
		ja: "粒子の質量・単位を入力してください",
		en: "Input a particle number",
	},
	[MessageCode.CONDITION_SETTING_RADIUS_ON_PARTICLE_STEP3]: {
		ja: "粒子の半径を入力してください",
		en: "Input a particle radius",
	},


	// 外力F
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
		ja: "入力が誤っていないか確認してください",
		en: "Check if the information entered is correct.",
	},
}

export const granuloMessage: Record<MessageCode, string> = {
	// 条件ラベル
	[MessageCode.CONDITION_SETTING_DESCRIPTION_ON_STEP1]: message.conditionSettingDescriptionOnStep1[lang],
	[MessageCode.CONDITION_SETTING_PARTICLE_NUMBER_ON_PARTICLE_STEP2]: message.conditionSettingParticleNumberOnParticleStep2[lang],

	// 粒子
	[MessageCode.CONDITION_SETTING_APPLYING_PARTICLE_AREA_ON_PARTICLE_STEP2]: message.conditionSettingApplyingParticleAreaOnParticleStep2[lang],
	[MessageCode.CONDITION_SETTING_COORDINATE_DESCRIPTION_ON_PARTICLE_STEP2]: message.conditionSettingCoordinateDescriptionOnParticleStep2[lang],
	[MessageCode.CONDITION_SETTING_MASS_ON_PARTICLE_STEP3]: message.conditionSettingMassOnParticleStep3[lang],
	[MessageCode.CONDITION_SETTING_RADIUS_ON_PARTICLE_STEP3]: message.conditionSettingRadiusOnParticleStep3[lang],

	// 外力F
	[MessageCode.CONDITION_SETTING_COORDINATE_DESCRIPTION_ON_FORCE_STEP2]: message.conditionSettingCoordinateDescriptionOnForceStep2[lang],
	[MessageCode.CONDITION_SETTING_APPLYING_FORCE_AREA_ON_FORCE_STEP2]: message.conditionSettingApplyingForceAreaOnForceStep2[lang],
	[MessageCode.CONDITION_SETTING_FORCE_DESCRIPTION_ON_FORCE_STEP2]: message.conditionSettingForceDescriptionOnForceStep2[lang],
	[MessageCode.CONDITION_SETTING_CONFIRM_TEXT_ON_COMPLETE]: message.conditionSettingConfirmTextOnComplete[lang],
}