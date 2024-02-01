import { config } from '@/config'

const headers = {
  'Authorization': config.token ?? 'no token',
  'Client-ID': config.clientId
}

const baseUrl = 'https://api.twitch.tv/helix'

type TwitchFetchOptions = {
  path: string
} & {
  method?: 'GET'
}

export async function twitchFetch (
  { method = 'GET', path }: TwitchFetchOptions
) {
  const parsedPath = path.startsWith('/') ? path : `/${path}`
  const url = baseUrl + parsedPath
  return await fetch(url, {
    method: method,
    headers
  }).then(res => {
    return res.json()
  })
}