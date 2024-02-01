import { config } from '@/config'
import NextAuth from 'next-auth/next'
import TwitchProvider from 'next-auth/providers/twitch'

const handler = NextAuth({
  providers: [
    TwitchProvider({
      clientId: config.clientId,
      clientSecret: config.clientSecret
    })
  ],
  secret: config.nextAuthSecret,
})

export { handler as GET, handler as POST }