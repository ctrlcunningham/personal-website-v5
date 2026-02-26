declare module '*.css' {
  const content: string;
  export default content;
}

interface CloudflareEnv extends Cloudflare.Env {} // idk why but it won't compile without this. cloudflare moment.