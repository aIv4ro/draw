import { SignInButton } from '@/components/sign-in-button'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()

  return (
    <main>
      Twitch twgiveaway
      {session == null && <SignInButton />}
    </main>
  )
}
