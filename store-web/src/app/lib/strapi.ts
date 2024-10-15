const { HOST, API_TOKEN } = process.env

export function query (url: string) {
  return fetch(`${HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  }).then(res => res.json)
}