import type { Metadata } from "next";
import "./globals.css";
import { Mr_Dafoe, Borel, Noto_Sans } from "next/font/google";

export const mrdafoe = Mr_Dafoe({
	weight: "400",
	variable: "--font-mrdafoe"
})
export const borel = Borel({
	weight: "400",
	variable: "--font-borel"
})
export const noto_sans = Noto_Sans({
	weight: "300",
	variable: "--font-noto-sans"
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
			<body className={`antialiased bg-ctp-base text-ctp-text p-5`}>
				<div className="flex justify-center items-center flex-col gap-4 text-center mb-4">
					<h1 className={`text-6xl w-fill ${mrdafoe.className}`}>xory's website</h1>
					<div className={`flex text-2xl w-full justify-evenly ${borel.className}`}>
						<p>home</p>
						<p>about</p>
						<p>projects</p>
						<p>contact</p>
						<p>blog</p>
					</div>
				</div>
				{children}
			</body>
		</html>
	);
}
