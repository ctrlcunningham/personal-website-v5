import Link from "next/link";
import { mrdafoe, playwrite_gb } from "../layout";

export default function InformationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
	  <body className={`antialiased bg-ctp-base text-ctp-text p-5`}>
	  		<div className="flex justify-center items-center flex-col gap-4 text-center mb-4">
	  			<h1 className={`text-5xl w-fill ${mrdafoe.className} text-ctp-lavender`}>xory's website</h1>
	  			<div className={`flex text-4xl w-full justify-evenly bg-ctp-mantle p-2 pb-4 rounded-2xl ${playwrite_gb.className}`}>
	  				<Link href="/" className="text-ctp-red hover:scale-125 hover:brightness-125 transition-all ease-in-out duration-300 delay-50">home</Link>
	  				<Link href="/about" className="text-ctp-yellow hover:scale-125 hover:brightness-125 transition-all ease-in-out duration-300 delay-50">about</Link>
	  				<Link href="/projects" className="text-ctp-green hover:scale-125 hover:brightness-125 transition-all ease-in-out duration-300 delay-50">projects</Link>
	  				<Link href="/blog" className="text-ctp-mauve hover:scale-125 hover:brightness-125 transition-all ease-in-out duration-300 delay-50">blog</Link>
	  				<Link href="/socials" className="text-ctp-blue hover:scale-125 hover:brightness-125 transition-all ease-in-out duration-300 delay-50">socials</Link>
	  			</div>
	  		</div>
	  		{children}
	  	</body>
	);
}