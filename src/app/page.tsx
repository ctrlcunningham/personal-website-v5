import { noto_sans } from "./layout"

export default function Home() {
	return (
		<>
			<p className={`text-xl ${noto_sans.className}`}>hai! :3 i'm xory, a silly little anglo-greek software engineer working on literally everything and anything. my dream job is probably either in aerospace or fintech c: <br />the vast majority of my projects are full-stack web, ai/ml and systems and the languages i use the most are python, javascript, rust, c++ and go. i've also worked with devops software like docker and gitlab ci/cd on my neat little servers ^_^ i currently daily drive nixos, which is probably portfolio-worthy because that's being deployed a lot recently (looking at you anduril). i've also worked with security, hardened linux and related systems.<br />there are also some sub-sectors of software engineering i've always found satisfying but was never able to "break into" like offensive cybersec (thank matt trobianni for that special interest), osdev, low-level gpu programming and others. aside from programming, my other interests include aviation, obscure video games, retro computers (amiga 500 ftw) and economics. </p>
			<div className={`flex gap-4 justify-evenly text-center ${noto_sans.className}`}>
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
						<li>cloudflare edge</li>
					</ul>
				</div>
			</div>
			<p className={`text-lg text-center m-10 ${noto_sans.className}`}>while you're here, why don't you take a look at some of the other pages on this website?</p>
		</>
	)
}