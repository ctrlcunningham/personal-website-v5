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
          <h3 className={`text-2xl text-ctp-teal ${playwrite_gb.className}`}>blueis</h3>
          <Link href="https://git.xorydev.xyz/Xory/blueis" className="border-1 border-ctp-teal text-ctp-teal p-2 px-4 m-2 text-lg rounded-lg">Git</Link>
        </div>
        <p>a barebones C++ redis clone. also described as "redis but worse"</p>
      </div>
      </div>
        
    </>
  )
}