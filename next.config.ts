import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	serverExternalPackages: ["@prisma/client", ".prisma/client"],
	experimental: {
		optimizePackageImports: [
			"react-icons",
			"tailwindcss",
			"marked"
		],
	},
	productionBrowserSourceMaps: false,
  outputFileTracingExcludes: {
    "*":[
      "**/node_modules/@vercel/og/**/*",
      "**/node_modules/next/dist/compiled/@vercel/og/**/*",
      "**/resvg.wasm",
      "**/yoga.wasm",
    ],
	}
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
