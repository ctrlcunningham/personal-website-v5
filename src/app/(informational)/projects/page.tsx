import Link from "next/link"
import { noto_sans, noto_sans_light, playwrite_gb } from "../../layout"

interface Link {
  title: string;
  url: string;
  key: number;
}

interface Project {
  colour: string;
  title: string;
  link: Link[];
  desc: string;
}



export default function Projects() {
  const projects: Project[] = [
    { "colour": "pink", "title": "lana", "link": [{ "key": 0, "url": "https://github.com/ctrlcunningham/lana", "title": "git" }], "desc": "a cozy neat little terminal-based client for the gemini cli with tools o' plenty." },
    { "colour": "green", "title": "anum", "link": [{ "key": 0, "url": "https://git.xorydev.xyz/Xory/anum-frontend", "title": "frontend"}, {"key": 1, "url": "https://git.xorydev.xyz/Xory/anum-backend", "title": "backend"}], "desc": "a minimalist modern forum built in the 90s' image." },
    { "colour": "text", "title": "whitehole", "link": [{ "key": 0, "url": "https://github.com/xorydev/whitehole", "title": "git"}], "desc": "a barebones hyper-minimalist rustacean web server." },
    { "colour": "blue", "title": "blueis", "link": [{ "key": 0, "url": "https://git.xorydev.xyz/Xory/blueis", "title": "git"}], "desc": "a barebones C++ redis clone. also described as \"redis but worse\"" },
    { "colour": "peach", "title": "mrfetch", "link": [{ "key": 0, "url": "https://github.com/xorydev/mrfetch", "title": "git"}], "desc": "my own little counterpart to nitch written in rust." },
    { "colour": "lavender", "title": "pasternakd", "link": [{ "key": 0, "url": "https://github.com/xorydev/pasternakd", "title": "git"}], "desc": "a network-wide kill-switch capable of decommissioning hundreds of computers in milliseconds using a chain reaction mechanism." },
    { "colour": "peach", "title": "solcrypt", "link": [{ "key": 0, "url": "https://github.com/xorydev/solcrypt", "title": "git"}], "desc": "a rustacean ransomware base made for educational purposes and red teaming." },
    { "colour": "rosewater", "title": "dethread-api.rs and ttydreams", "link": [{ "key": 0, "url": "https://github.com/xorydev/dethread-api.rs", "title": "dethread"}], "desc": "the two predecessors to anum. ttydreams was never finished" },
    { "colour": "sky", "title": "skylink", "link": [{ "key": 0, "url": "https://git.xorydev.xyz/Xory/skylink", "title": "git"}], "desc": "a rustacean RAT for windows originally written for educational purposes and red teaming, later repurposed for trolling because my friends voluntarily installed it on their own computers. i don't know why, ask them." },
    { "colour": "sapphire", "title": "valkyrie", "link": [{ "key": 0, "url": "https://github.com/xorydev/whitehole", "title": "git"}], "desc": "a local llm-based assistant for system management. as of writing, it is yet to be completed." },
    { "colour": "mauve", "title": "huginn", "link": [{ "key": 0, "url": "https://github.com/xorydev/whitehole", "title": "git"}], "desc": "a search engine that is directly interfaced with via discord." },
    { "colour": "red", "title": "this website!", "link": [{"key": 0, "url": "https://github.com/ctrlcunningham/personal-website-v5", "title": "git"}], "desc": "the website you are looking at right now :3"}
  ]

  return (
    <>
      <h1 className={`w-fill text-center text-6xl ${playwrite_gb.className} py-2`}>projects</h1>
      <h2 className={`w-fill text-center text-ctp-surface2 text-2xl mt-2 ${noto_sans_light.className}`}>the good, the bad and the ugly.</h2>
      
      <div className="lg:grid lg:grid-rows-3 lg:grid-cols-4 sm:flex sm:flex-col items-center">
        {projects.map((project) =>
          <div key={project.title} className={`p-6 bg-ctp-mantle size-fit rounded-xl ${noto_sans.className} m-4`}>
            <div className="flex justify-between items-center">
              <h3 className={`text-2xl text-ctp-${project.colour} ${playwrite_gb.className}`}>{project.title}</h3>
              <div className="flex">
                {project.link.map((link) =>
                  <Link key={link.key} href={link.url} className={`border-1 border-ctp-${project.colour} text-ctp-${project.colour} p-2 px-4 m-2 rounded-lg`}>{link.title}</Link>
                )}
              </div>
            </div>
            <p>{project.desc}</p>
          </div>
        )}
      </div>
    </>
  )
}