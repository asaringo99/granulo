const forceSettingDefault: ForceSetting = {
	overall: undefined,
	f: {
		x: 0,
		y: 0,
	},
	gradation: false,
	type: "force",
	status: {
		now: "step2",
		progress: "step2",
	},
	pos: undefined,
	note: "",
	commit: false,
}

const particleSettingDefault: ParticleSetting = {
	overall: undefined,
	num: 0,
	pos: {
		x: 0,
		y: 0,
	},
	r: 0,
	m: {
		i: 0,
		unit: '',
		g: 0,
	},
	e: 0,
	v: {
		x: 0,
		y: 0
	},
	type: "particle",
	status: {
		now: "step2",
		progress: "step2",
	},
	note: "",
	commit: false,
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
	e: 0,
	type: "solid",
	status: {
		now: "step2",
		progress: "step2",
	},
	note: "",
	commit: false,
}

export function shallowMerge<T extends object, U extends object>(x: T, y: U): T & U {
  return { ...x, ...y } as T & U;
}

type P<T extends string, K> = { [key in T]: K }

export const defaulActiontValue: P<ActionType, any> = {
	particle: particleSettingDefault,
	force: forceSettingDefault,
	solid: solidSettingDefault,
}

export const actionSteps: P<ActionType | "default", SettingStatus[]> = {
	particle: ["step1", "step2", "step3", "complete"],
	force: ["step1", "step2", "complete"],
	solid: ["step1", "step2", "step3", "complete"],
	default: ["step1", "complete"],
}

export const convertStep = (step: SettingStatus): string => {
	return step.split("-").pop() ?? "";
}

export const FIRST_STEP = 0