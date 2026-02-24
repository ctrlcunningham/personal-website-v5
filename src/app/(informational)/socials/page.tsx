import { playwrite_gb } from "@/app/layout"
import React, { ReactNode } from "react";
import { SiDiscord, SiSignal, SiMatrix, SiGmail, SiGithub, SiForgejo } from "react-icons/si";
import Link from "next/link";

interface SocialData {
  key: number,
  name: string;
  account: string | ReactNode;
  icon: ReactNode
}

function SocialCard(props: SocialData) {
  return (
    <div className="bg-ctp-mantle p-10 m-2 w-fit text-center rounded-xl flex items-center gap-6">
      {props.icon}
      <div className="flex flex-col gap-2">
        <h2 className={`text-4xl ${playwrite_gb.className}`}>{props.name}</h2>
        <p className="text-xl">{props.account}</p>
      </div>
    </div>
  )
}

export default function Socials() {
  const socials = [
    {
      "key": 0,
      "name": "discord",
      "account": "@xorydev",
      "icon": <SiDiscord className="size-24 text-ctp-blue" />
    },
    {
      "key": 1,
      "name": "signal",
      "account": "xory.21",
      "icon": <SiSignal className="size-24 text-ctp-sky" />
    },
    {
      "key": 2,
      "name": "matrix",
      "account": "@xorydev:matrix.org",
      "icon": <SiMatrix className="size-24 text-ctp-green" />
    },
    {
      "key": 3,
      "name": "mail",
      "account": "xory@tutamail.com",
      "icon": <SiGmail className="size-24 text-ctp-flamingo" />
    },
    {
      "key": 4,
      "name": "github",
      "account": "@ctrlcunningham",
      "icon": <SiGithub className="size-24" />
    },
    {
      "key": 5,
      "name": "git server",
      "account": <Link href="https://git.xorydev.xyz/Xory">git.xorydev.xyz/Xory</Link>,
      "icon": <SiForgejo className="size-24" />
    },
  ] // seriously considering having this be fetched from the DB so i can dynamically update it from CF dashboard

  return (
    <>
      <h1 className={`text-4xl text-center ${playwrite_gb.className}`}>find me here :3</h1>
      <div className="flex w-fill justify-center mt-4">
        <div className="flex flex-col items-center justify-items-center md:grid md:grid-cols-2 md:grid-rows-4 gap-4">
          {socials.map(social => <SocialCard key={social.key} name={social.name} account={social.account} icon={social.icon} /> )}
        </div>
      </div>
    </>
  )
}