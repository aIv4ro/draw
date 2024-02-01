type Config = {
  clientId: string,
  clientSecret: string
  nextAuthSecret: string
  token?: string
}

export const config: Config = {
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  nextAuthSecret: process.env.NEXTAUTH_SECRET!,
  token: process.env.TOKEN
}