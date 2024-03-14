import type { Config } from "./default";

export default {
	mode: "production",
	name: "Granblue Fantasy Party Finder",

	debug: false,

	frontendUrl: "http://localhost:3000",
	backendUrl: "http://localhost:4000",
} satisfies Config;
