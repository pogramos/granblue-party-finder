import type { Config } from "./default";

export default {
	mode: "development",
	name: "Granblue Fantasy Party Finder - Development",

	debug: false,

	frontendUrl: "http://localhost:3000",
	backendUrl: "http://localhost:4000",
} satisfies Config;
