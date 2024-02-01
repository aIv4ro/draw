type Config = {
  clientId: string,
  clientSecret: string
  token?: string
}

export const config: Config = {
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  token: process.env.TOKEN
}