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
			url: () => "/user/top",
		},
		fee: {
			screenId: "U_0002",
			url: () => "/user/fee",
		},
	},
	simulation: {
		condition: {
			register: {
				screenId: "S_0001",
				url: (id?: string) => `/simulation/condition/register/${id ?? ":id"}`,
			},
			view: {
				screenId: "S_0002",
				url: () => "/simulation/condition/list",
			},
			preview: {
				screenId: "S_0004",
				url: () => "/simulation/condition/preview",
			},
		},
		execute: {
			screenId: "S_0003",
			url: () => "/simulation/execute",
		},
	}
}