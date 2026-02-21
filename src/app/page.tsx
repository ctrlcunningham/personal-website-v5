import Link from "next/link"
import { noto_sans } from "./layout"

export default function Home() {
	return (
		<>
			<p className={`text-xl ${noto_sans.className}`}>hai! :3 i'm xory, a silly little anglo-greek software engineer working on literally everything and anything. <wbr />my dream job is probably either in aerospace or fintech c: <br />the vast majority of my projects are <wbr />full-stack web, ai/ml and systems <wbr />and the languages i use the most are <wbr />python, javascript, <wbr />rust, c++ and go. i've also worked with devops software like <wbr />docker and gitlab ci/cd on my neat little servers ^_^ <wbr />i currently daily drive nixos, <wbr />which is probably portfolio-worthy <wbr />because that's being deployed a lot recently (looking at you anduril). <wbr />i've also worked with security, hardened linux and related systems.<br />there are also some sub-sectors of software engineering i've always<wbr /> found satisfying but was never able to "break into"<wbr/> like offensive cybersec (thank matt trobianni for that special interest), osdev, low-level gpu programming and others. aside from programming, <wbr />my other interests include aviation, obscure video games, <wbr />retro computers (amiga 500 ftw) and economics. <wbr /></p>
			<div className="flex gap-4 justify-evenly text-center">
				<div className="border-1 border-ctp-sapphire rounded-xl w-fit p-4 mt-4">
					<h2 className="text-xl mb-1 font-semibold text-ctp-sky">projects i'm most proud of</h2>
					<ul className="ml-4">
						<li>blueis: a barebones redis clone</li>
						<li>anum: a simple forum made in the 90s' image (more updates later this year)</li>
						<li>lana: a cozy little cli for the gemini api</li>
						<li>whitehole: a barebones file hosting server</li>
					</ul>
				</div>
				
				<div className="border-1 border-ctp-flamingo rounded-xl w-fit p-4 mt-4">
					<h2 className="text-xl mb-1 font-semibold text-ctp-flamingo">frameworks i've worked with</h2>
					<ul className="ml-4">
						<li>reactjs & derivatives</li>
						<li>sveltekit</li>
						<li>actix/ntex</li>
						<li>hono</li>
						<li>tokio.rs</li>
					</ul>
				</div>
				<div className="border-1 border-ctp-subtext0 rounded-xl w-fit p-4 mt-4">
					<h2 className="text-xl mb-1 font-semibold">notable systems i'm experienced in</h2>
					<ul className="ml-4">
						<li>nixos</li>
						<li>proxmox</li>
						<li>docker</li>
						<li>linux hardening</li>
						<li>n8n</li>
					</ul>
				</div>
			</div>
			<div className="m-6 text-center flex flex-col justify-center">
				<h2 className="text-2xl">self-host links</h2>
				<div className="flex justify-evenly text-lg mt-3">
					<Link href="https://searx.xorydev.xyz" className="p-6 px-24 rounded-2xl border-2 text-ctp-blue border-ctp-blue">searxng</Link>
					<Link href="https://git.xorydev.xyz" className="p-6 px-24 rounded-2xl border-2 text-ctp-orange border-ctp-orange">git (forgejo)</Link>
				</div>
			</div>
		</>
	)
}