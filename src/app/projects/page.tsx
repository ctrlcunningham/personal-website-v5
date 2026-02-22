import Link from "next/link"
import { noto_sans, noto_sans_light, playwrite_gb } from "../layout"

export default function Projects() {
  return (
    <>
      <h1 className={`w-fill text-center text-6xl ${playwrite_gb.className} py-2`}>projects</h1>
      <h2 className={`w-fill text-center text-ctp-surface2 text-2xl mt-2 ${noto_sans_light.className}`}>the good, the bad and the ugly.</h2>
      <div className="flex justify-center text-center">
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-pink ${playwrite_gb.className}`}>lana</h3>
            <Link href="https://github.com/ctrlcunningham/lana" className="border-1 border-ctp-pink text-ctp-pink p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a cozy neat little terminal-based client for the gemini cli with tools o' plenty.</p>
        </div>
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-green ${playwrite_gb.className}`}>anum</h3>
            <div className="flex">
              <Link href="https://git.xorydev.xyz/Xory/anum-frontend" className="border-1 border-ctp-green text-ctp-green p-2 px-4 m-2 text-lg rounded-lg">Git - Frontend</Link>
              <Link href="https://git.xorydev.xyz/Xory/anum-backend" className="border-1 border-ctp-green text-ctp-green p-2 px-4 m-2 text-lg rounded-lg">Git - Backend</Link>
            </div>
          </div>
          <p>a minimalist forum built in the 90s' image.</p>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-text ${playwrite_gb.className}`}>whitehole</h3>
            <Link href="https://github.com/xorydev/whitehole" className="border-1 border-ctp-text text-ctp-text p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a barebones hyper-minimalist rustacean web server.</p>
        </div>
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-blue ${playwrite_gb.className}`}>blueis</h3>
            <Link href="https://git.xorydev.xyz/Xory/blueis" className="border-1 border-ctp-blue text-ctp-blue p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a barebones C++ redis clone. also described as "redis but worse"</p>
        </div>
      </div>   
      <div className="flex justify-center text-center">
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-peach ${playwrite_gb.className}`}>mrfetch</h3>
            <Link href="https://github.com/xorydev/mrfetch" className="border-1 border-ctp-peach text-ctp-peach p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>my own little counterpart to nitch written in rust.</p>
        </div>
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-lavender ${playwrite_gb.className}`}>pasternakd</h3>
            <Link href="https://git.xorydev.xyz/Xory/blueis" className="border-1 border-ctp-lavender text-ctp-lavender p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a network-wide kill-switch capable of decommissioning hundreds of computers in milliseconds using a chain reaction mechanism.</p>
        </div>
     </div>
     <div className="flex justify-center text-center">
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-yellow ${playwrite_gb.className}`}>solcrypt</h3>
            <Link href="https://github.com/xorydev/solcrypt" className="border-1 border-ctp-yellow text-ctp-yellow p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a rustacean ransomware base made for educational purposes and red teaming.</p>
        </div>
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-mauve ${playwrite_gb.className}`}>todoctl</h3>
            <Link href="https://github.com/xorycode/todoctl" className="border-1 border-ctp-mauve text-ctp-mauve p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a minimal terminal based to-do list manager. to be replaced by my own obsidian counterpart.</p>
        </div>
     </div>
     <div className="flex justify-center text-center">
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-rosewater ${playwrite_gb.className}`}>dethread-api.rs and ttydreams</h3>
            <Link href="https://github.com/xorydev/dethread-api.rs" className="border-1 border-ctp-rosewater text-ctp-rosewater p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>the two predecessors to anum. ttydreams was never finished.</p>
        </div>
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-sky ${playwrite_gb.className}`}>skylink</h3>
            <Link href="https://git.xorydev.xyz/Xory/skylink" className="border-1 border-ctp-sky text-ctp-sky p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a rustacean RAT for windows originally written for educational purposes and red teaming, later repurposed for trolling because my friends <i>voluntarily</i> installed it on their own computers. i don't know why, ask them.</p>
        </div>
     </div>
     <div className="flex justify-center text-center">
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-sapphire ${playwrite_gb.className}`}>valkyrie</h3>
            <Link href="https://git.xorydev.xyz/Xory/valkyrie" className="border-1 border-ctp-sapphire text-ctp-sapphire p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a local llm-based assistant for system management. as of writing, it is yet to be completed.</p>
        </div>
        <div className={`p-6 bg-ctp-mantle w-fit rounded-xl ${noto_sans.className} m-4`}>
          <div className="flex justify-between items-baseline">
            <h3 className={`text-2xl text-ctp-mauve ${playwrite_gb.className}`}>huginn</h3>
            <Link href="https://git.xorydev.xyz/Xory/huginn" className="border-1 border-ctp-mauve text-ctp-mauve p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
          </div>
          <p>a search engine that is directly interfaced with via discord.</p>
        </div>
     </div>
    </>
  )
}