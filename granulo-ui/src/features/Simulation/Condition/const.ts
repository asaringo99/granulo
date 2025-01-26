const forceSetitngDefault: ForceSetting = {
	overall: true,
	f: 0,
	gradation: false
}

const particleSettingDefault: ParticleSetting = {
	overall: false,
	num: 0,
	r: 0,
	m: 0,
	e: 0,
	v: {
		x: 0,
		y: 0
	}
}

const solidSettingDefault: SolidSetting = {
	pos: {
		x: 0,
		y: 0
	},
	shape: "circle",
	size: {
		r: undefined,
		x: undefined,
		y: undefined
	},
	e: 0
}

export function shallowMerge<T extends object, U extends object>(x: T, y: U): T & U {
  return { ...x, ...y } as T & U;
}

type P<T extends string, K> = { [key in T]: K }

const particleTp: {type: ActionType, status: SettingStatus} = {
	type: "particle",
	status: "step2",
}

const forceTp: {type: ActionType, status: SettingStatus} = {
	type: "force",
	status: "step2",
}

const solidTp: {type: ActionType, status: SettingStatus} = {
	type: "solid",
	status: "step2",
}

export const defaulActiontValue: P<ActionType, ActionSetting> = {
	particle: shallowMerge(particleSettingDefault, particleTp),
	force: shallowMerge(forceSetitngDefault, forceTp),
	solid: shallowMerge(solidSettingDefault, solidTp),
}