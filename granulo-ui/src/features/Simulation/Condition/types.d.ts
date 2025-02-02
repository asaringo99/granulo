enum SettingStatusE {
	STEP1 = 'step1',
	FORCE_STEP2 = 'force-step2',
	FORCE_STEP3 = 'force-step3',
	FORCE_STEP4 = 'force-step4',
	FORCE_STEP5 = 'force-step5',
	PARTICLE_STEP2 = 'particle-step2',
	PARTICLE_STEP3 = 'particle-step3',
	PARTICLE_STEP4 = 'particle-step4',
	PARTICLE_STEP5 = 'particle-step5',
	SOLID_STEP2 = 'solid-step2',
	SOLID_STEP3 = 'solid-step3',
	SOLID_STEP4 = 'solid-step4',
	SOLID_STEP5 = 'solid-step5',
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
	m: number, // mass
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