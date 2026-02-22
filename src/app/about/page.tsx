import Link from "next/link";
import { noto_sans, noto_sans_light, playwrite_gb } from "../layout"
import { SiHono, SiNixos, SiFastapi, SiSvelte, SiNextdotjs, SiReact, SiDocker, SiProxmox, SiCloudflareworkers, SiC } from "react-icons/si";

export default function About() {
	return (
		<>
			<h1 className={`w-fill text-center text-6xl ${playwrite_gb.className} py-2`}>more about me</h1>
			<h1 className={`w-fill text-center text-ctp-surface2 text-2xl ${noto_sans_light.className}`}>or, a concise personal history from the beginning to the present and my hopes for the future</h1>
			<hr className="border-2 my-3 text-ctp-surface0" />
			<div className="flex items-center">
				<div className={`bg-ctp-mantle p-6 rounded-xl mx-4 size-full ${noto_sans.className}`}>
					<h3 className={`text-3xl ${noto_sans_light.className}`}>history</h3>
					<p>so, i started out on an old clevo p150hmx my dad used to use. it was good enough for a first computer, since i didn't really do much on it. mostly just minecraft. however, it <i>was</i> my (albeit virtualised) first contact with linux. i used to spin up vms, install a linux distro, poke around a bit and then forget about it, mostly because i didn't really know what to do afterwards. even then, i'd argue it was the seed of this journey.</p>
					<p className="pt-2">anyway, the desktop i got afterwards practically defined when i actually started developing. i learned python, built some basic api clients and started daily driving a windows-linux dualboot. i also learned javascript and after a long period of nothing, i learned rust and built a bunch of script-sized utilties. eventually, i upgraded it from a gtx 1050 to an rtx 3060 and began messing around with ai/ml, particularly diffusers and transformers. after finding some programmer friends online who motivated me to learn further, i started working with next.js, sveltekit and react to make actual modern websites.</p>
					<p className="pt-2">recently, i ship of theseus'd it to a 5700x. at this point, i began to progress almost exponentially: i switched to nixos full-time, spun up a bunch of services via docker on a pi 4, made programs with actix/ntex, diesel and tokio, then i made my first actually practical rust applications, studied c++ and made my barebones redis clone (more c++ projects to come hopefully)</p>
					<p className="pt-2">less than a year ago, i got grade a on cambridge proficiency and my dad bought me my dream laptop as a reward: the framework laptop 16. to call it the luckiest purchase of my life would be an understatement: it has 32 gigabytes of ddr5 and i got it <i>mere months</i> before the rampocalypse. that aside, it's a genuine tank, i doubt i'll need another computer for ~10 years. since i had a laptop that was superiour to my 5700x desktop, i decided to turn said desktop into a homelab and run my own proxmox instance which runs all my infra: ollama, immich, searxng, samba, minecraft, lidarr, forgejo, you name it. now, i've started working with cloudflare workers, durable objects, d1 and all those cool little doohickeys ^_^. as of writing, i'm participating in hack club's 2026 flavour town event. i'm also scheming up a variant of my nixos installation that uses more of its capabilities: heavily hardened, local lms baked into the interface, automation all around, virtual machines everywhere and docker containers running synchronised copies of some of my homelab's services. it seems like a neat little project, we'll see how it goes.</p>
					<p className="pt-2">the foreseeable future seems bright. my progress might as well be exponential. i'm finally on concerta! :D one of the programs i've made, anum, a forum made in the 90s' image, is going to receive some big updates or even a rewrite this spring or summer. i'm also working on getting my silly little hands on a 3d printer, so tomfoolery can reach critical levels! {'>'}:3 i've got plenty of ideas for what to do, as well: a discord clone, my own (small) LM (gunning for ducc's spot, hehe), my own budget smart home utilties, home-made drones (cyn will become real :3), fl16 mods (f.e. framelight), the list goes on and on!</p>
				</div>
				<div className="flex flex-col justify-evenly w-1/3 text-center">
					<div className="bg-ctp-mantle p-6 rounded-xl my-2">
						<h3 className={`text-3xl ${noto_sans_light.className}`}>timeline</h3>
						<ul className={`${noto_sans.className}`}>
							<li>first experience with linux in vms</li>
							<li>basic python & javascript</li>
							<li>basic rust & ai/ml</li>
							<li>js & rs frameworks</li>
							<li>daily driving nixos</li>
							<li>first pi 4 homelab with docker</li>
							<li>practical rust & c++ applications</li>
							<li>omnirole proxmox homelab</li>
							<li>cloudflare edge applications</li>
							<li>we are here!</li>
						</ul>
					</div>
					<div className="bg-ctp-mantle p-6 rounded-xl my-2">
						<h3 className={`text-3xl ${noto_sans_light.className}`}>tech stack</h3>
						<div className="flex justify-center w-fill">
							<div className="grid grid-cols-4 grid-rows-2 gap-6 text-center justify-center items-center p-2">
								<SiNixos className="size-10 text-ctp-teal"/>
								<SiFastapi className="size-10 text-ctp-green"/>
								<SiHono className="size-10 text-ctp-peach"/>
								<SiSvelte className="size-10 text-ctp-flamingo"/>
								<SiNextdotjs className="size-10"/>
								<SiProxmox className="size-10 text-ctp-peach"/>
								<SiDocker className="size-10 text-ctp-lavender"/>
								<SiCloudflareworkers className="size-10 text-ctp-mauve"/>
							</div>
						</div>
					</div>
					<div className="bg-ctp-mantle p-6 rounded-xl my-2">
						<Link href="/projects" className={`text-lg ${playwrite_gb.className} text-ctp-rosewater`}>maybe after this you should check out what i've made :3</Link>
					</div>
				</div>
			</div>
		</>
	)
}