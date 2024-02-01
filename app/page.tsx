import { twitchFetch } from './services/twitch-fetch'

export default async function Home() {
  const data = await twitchFetch({ 
    path: '/users?login=alvaromg_22'
  })

  console.log(data)

  return (
    <main>
      Twitch twgiveaway
    </main>
  )
}
