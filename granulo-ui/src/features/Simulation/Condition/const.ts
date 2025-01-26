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

const particleTp: {type: ActionType, status: {now: SettingStatus, progress: SettingStatus}} = {
	type: "particle",
	status: {
		now: "particle-step2",
		progress: "particle-step2",
	}
}

const forceTp: {type: ActionType, status: {now: SettingStatus, progress: SettingStatus}} = {
	type: "force",
	status: {
		now: "force-step2",
		progress: "force-step2",
	}
}

const solidTp: {type: ActionType, status: {now: SettingStatus, progress: SettingStatus}} = {
	type: "solid",
	status: {
		now: "solid-step2",
		progress: "solid-step2",
	}
}

export const defaulActiontValue: P<ActionType, ActionSetting> = {
	particle: shallowMerge(particleSettingDefault, particleTp),
	force: shallowMerge(forceSetitngDefault, forceTp),
	solid: shallowMerge(solidSettingDefault, solidTp),
}

export const actionSteps: P<ActionType | "default", SettingStatus[]> = {
	particle: ["step1", "particle-step2", "particle-step3", "complete"],
	force: ["step1", "force-step2", "force-step3", "complete"],
	solid: ["step1", "solid-step2", "solid-step3", "complete"],
	default: ["step1", "complete"],
}

export const convertStep = (step: SettingStatus): string => {
	return step.split("-").pop() ?? "";
}

export const FIRST_STEP = 0