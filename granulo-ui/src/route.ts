export const routes = {
	root: {
		screenId: "R_0001",
		url: () => "/",	
	},
	home: {
		top: {
			screenId: "H_0001",
			url: () => "/home/top",
		},
		about: {
			screenId: "H_0002",
			url: () => "/home/about",
		},
	},
	user: {
		top: {
			screenId: "U_0001",
			url: () => "/user/fee",
		},
		fee: {
			screenId: "U_0002",
			url: () => "/user/fee",
		},
	},
	simulation: {
		condition: {
			setting: {
				screenId: "S_0001",
				url: () => "/simulation/condition/setting",
			},
		},
		execute: {
			screenId: "S_0002",
			url: () => "/simulation/execute",
		},
		view: {
			screenId: "S_0003",
			url: () => "/simulation/view",
		},
	}
}