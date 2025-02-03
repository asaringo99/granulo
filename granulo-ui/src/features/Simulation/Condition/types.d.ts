enum SettingStatusE {
	STEP1 = 'step1',
	STEP2 = 'step2',
	STEP2 = 'step3',
	STEP2 = 'step4',
	STEP2 = 'step5',
	COMPLETE = 'complete'
}

declare type SettingStatus = `${SettingStatusE}`

type DeepMerge<Source extends object, Branch extends object> = {
	[key in keyof Source | keyof Branch]: key extends keyof Source
		? Source[key]
		: Branch[key]
};

declare type CommonSetting = {
	type: ActionType,
	status: {
		now: SettingStatus,
		progress: SettingStatus,
	},
	commit: boolean
}

declare type ActionSetting = {
	particle: Record<string, ParticleSetting>,
	force: Record<string, ForceSetting>,
	solid: Record<string, SolidSetting>,
};

declare type ForceType = {
	overall: boolean | undefined,
	pos?: {
		x: number,
		y: number,
	}
	f: {
		x: number,
		y: number,
	}
	gradation: boolean,
}

declare type ParticleType = {
	overall: boolean | undefined,
	pos?: {
		x: number,
		y: number,
	}
	num: number // number of particles
	r: number, // radius
	m: {
		i: number // mass input
		unit: string, // mass unit
		g: number // mass gram
	},
	e: number, // coefficient of restitution
	v: { // initial velocity
		x: number,
		y: number,
	}
}

declare type SolidType = {
	pos: {
		x: number,
		y: number,
	}
	shape: 'circle' | 'rectangle',
	size: {
		r?: number,
		x?: number,
		y?: number,
	}
	e: number, // coefficient of restitution
}

declare type ForceSetting = DeepMerge<CommonSetting, ForceType>;
declare type ParticleSetting = DeepMerge<CommonSetting, ParticleType>;
declare type SolidSetting = DeepMerge<CommonSetting, SolidType>;

declare type ActionType = "particle" | "force" | "solid";
declare type ShapeType = "rectangle" | "circle";