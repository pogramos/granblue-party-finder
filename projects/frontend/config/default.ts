export const config = {
	mode: "development" as "production" | "development",
	name: "Granblue Party Finder",
	company: {
		name: "Pogramos",
		twitterHandle: "@pogramos",
	},
	slug: "GBPF",

	description: "A simple partyfinder for Granblue Fantasy:Relink game",
	keywords: "granblue fantasy, rpg, party, finder, j-rpg",

	frontendUrl: "http://localhost:3000",
	backendUrl: "http://localhost:4000",

	defaultRedirectPath: "/",

	debug: false,
	maintenance: false,

	theme: {
		color: { primary: "#5c4de3" },
		colorDarkBackground: "hsl(240 10% 9%)",
		strokeWidth: 1.5,
		screenSizes: {
			xs: "420px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1400px",
		},
	},

	has: {
		chatSupport: true, // TODO: implement
		pwaSupport: true,
		signUp: true, // TODO: implement
		waitlist: true, // TODO: implement
	},

	languages: [
		{ value: "en", label: "English" },
		{ value: "nl", label: "Nederlands" },
	],
	defaultLanguage: "en",
};

export default config;

export type DeepPartial<T> = T extends object
	? { [P in keyof T]?: DeepPartial<T[P]> }
	: T;

export type Config = DeepPartial<typeof config>;
