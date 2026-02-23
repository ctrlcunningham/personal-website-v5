import Link from "next/link";
import { noto_sans_light, playwrite_gb } from "../layout";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`antialiased bg-ctp-base text-ctp-text p-5 ${playwrite_gb.variable}`}>
      <div className="flex w-fill justify-between items-baseline m-4">
        <h1 className={`text-2xl ${playwrite_gb.className} text-ctp-surface1`}>xory's little blog</h1>
        <Link className={`text-xl ${noto_sans_light.className} text-ctp-sky`} href="/">return to main website</Link>
      </div>
      {children}
    </body>
  );
}