declare type SettingStatus = 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'complete';

declare type ActionSetting = (
	ForceSetting |
	ParticleSetting |
	SolidSetting
) & {
	type: ActionType
	status: SettingStatus
};

declare type ForceSetting = {
	overall: boolean,
	pos?: {
		x: number,
		y: number,
	}
	f: number,
	gradation: boolean,
}

declare type ParticleSetting = {
	overall: boolean,
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

declare type SolidSetting = {
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

declare type ActionType = "particle" | "force" | "solid";
declare type ShapeType = "rectangle" | "circle";