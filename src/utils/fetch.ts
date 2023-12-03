const API_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'SKqzijifzz2vqpbxbeLNJ5mt4Z7ea88Vvmti6D7D'

export default async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== 'undefined' && urlParams?.length > 0
          ? urlParams
          : ''
      }`,
    )
    const data = await response.json()
    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
