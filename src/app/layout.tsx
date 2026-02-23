import type { Metadata } from "next";
import "./globals.css";
import { Mr_Dafoe, Playwrite_GB_J, Noto_Sans } from "next/font/google";
import Link from "next/link";

export const mrdafoe = Mr_Dafoe({
	weight: "400",
})

export const noto_sans = Noto_Sans({
	weight: "300",
})

export const noto_sans_light = Noto_Sans({
	weight: "100",
})

export const playwrite_gb = Playwrite_GB_J({
	weight: "200",
	variable: "--font-playwrite"
})

export const metadata: Metadata = {
	title: "xory's personal website",
	description: "my own little corner of the internet",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			{children}
		</html>
	);
}
