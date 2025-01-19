export const routes = {
	root: {
		screenId: "R_0001",
		url: () => "/",	
	},
	home: {
		top: {
			screenId: "B_0001",
			url: () => "/home/top",
		},
		about: {
			screenId: "B_0002",
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
				screenId: "C_0001",
				url: () => "/simulation/condition/setting",
			},
		},
	}
}