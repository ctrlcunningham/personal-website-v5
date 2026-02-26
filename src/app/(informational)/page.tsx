import { playwrite_gb, noto_sans, noto_sans_light } from "../layout"

export default function Home() {
	return (
		<>
			<p className={`text-xl ${noto_sans.className} my-1`}>hai! :3 i'm xory, a silly little anglo-greek software engineer working on literally everything and anything. my dream job is probably either in aerospace or fintech c:</p><p className={`text-xl ${noto_sans.className} my-2`}>the vast majority of my projects are full-stack web, ai/ml and systems and the languages i use the most are python, javascript, rust, c++ and go. i've also worked with devops software like docker and gitlab ci/cd on my neat little servers ^_^ i currently daily drive nixos, which is probably portfolio-worthy because that's being deployed a lot recently (looking at you anduril). i've also worked with security, hardened linux and related systems.</p><p className={`text-xl ${noto_sans.className} my-2`}>there are also some sub-sectors of software engineering i've always found satisfying but was never able to "break into" like offensive cybersec (thank matt trobianni for that special interest), osdev, low-level gpu programming and others. aside from programming, my other interests include aviation, obscure video games, retro computers (amiga 500 ftw) and economics.</p>
			<div className={`flex flex-col lg:flex-row gap-4 justify-evenly items-center text-center ${noto_sans.className}`}>
				<div className="border-1 border-ctp-sapphire rounded-xl w-fit p-6 mt-4 hover:scale-105 transition ease-in-out duration-300">
					<h2 className={`text-2xl mb-1 font-semibold text-ctp-sky ${noto_sans_light.className}`}>projects i'm most proud of</h2>
					<ul className="text-xl">
						<li>blueis: a barebones redis clone</li>
						<li>anum: a simple forum made in the 90s' image (more updates later this year)</li>
						<li>lana: a cozy little cli for the gemini api</li>
						<li>whitehole: a barebones file hosting server</li>
					</ul>
				</div>
				<div className="border-1 border-ctp-flamingo rounded-xl w-fit p-6 mt-4 hover:scale-105 transition ease-in-out duration-300">
					<h2 className={`text-2xl mb-1 font-semibold text-ctp-flamingo ${noto_sans_light.className}`}>frameworks i've worked with</h2>
					<ul className="text-xl">
						<li>reactjs & derivatives</li>
						<li>sveltekit</li>
						<li>actix/ntex</li>
						<li>hono</li>
						<li>tokio.rs</li>
					</ul>
				</div>
				<div className="border-1 border-ctp-subtext0 rounded-xl w-fit p-6 mt-4 hover:scale-105 transition ease-in-out duration-300">
					<h2 className={`text-2xl font-semibold ${noto_sans_light.className}`}>notable systems i'm experienced in</h2>
					<ul className="text-xl">
						<li>nixos</li>
						<li>proxmox</li>
						<li>docker</li>
						<li>linux hardening</li>
						<li>cloudflare edge</li>
					</ul>
				</div>
			</div>
			<p className={`text-lg text-center m-10 ${playwrite_gb.className}`}>while you're here, why don't you take a look at some of the other pages on this website?</p>
		</>
	)
}