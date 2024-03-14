import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import config from "./config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		TanStackRouterVite(),
		createHtmlPlugin({
			template: "./index.html",
			inject: {
				data: {
					title: config.name,
					description: config.description,
					keywords: config.keywords,
					author: config.company.name,
					color: config.theme.color.primary,
					url: config.frontendUrl,
					twitter: config.company.twitterHandle,
				},
			},
		}),
	],
	resolve: {
		preserveSymlinks: true,
		alias: {
			"~": path.resolve(__dirname, "./src"),
		},
	},
	define: {
		"process.env": {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		},
	},
});
