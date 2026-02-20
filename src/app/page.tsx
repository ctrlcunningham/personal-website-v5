import { noto_sans } from "./layout"

export default function Home() {
	return (
		<>
			<p className={`text-xl ${noto_sans.className}`}>hai! :3 i'm xory, a silly little anglo-greek software engineer working on literally everything and anything. <wbr />my dream job is probably either in aerospace or fintech c: <wbr />the vast majority of my projects are <wbr />full-stack web, ai/ml and systems <wbr />and the languages i use the most are <wbr />python, javascript, <wbr />rust, c++ and go. aside from programming, <wbr />my other interests include aviation, obscure video games, <wbr />retro computers (amiga 500 ftw) and economics. <wbr />i've also worked with devops software like <wbr />docker and gitlab ci/cd on my neat little servers ^_^ <wbr />i currently daily drive nixos, <wbr />which is probably portfolio-worthy <wbr />because that's being deployed a lot recently (looking at you anduril). <wbr />finally, i've worked with security, hardened linux and related systems. <wbr />there are also some sub-sectors of software engineering i've always<wbr /> found satisfying but was never able to "break into"<wbr/> like offensive cybersec (thank matt trobianni for that special interest), osdev, low-level gpu programming and others.</p>
		</>
	)
}