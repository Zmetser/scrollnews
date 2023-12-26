const REMOTE_URL =
  'https://stories-test-78664cfb8416.herokuapp.com/?randomize-media=true'
// const REMOTE_URL = 'http://localhost:3000/?randomize-media=true'

export const fetchNews = async (signal) => {
  // Artificial delay for demo purposes
  const response = await fetch(REMOTE_URL, {
    signal
  })
  if (response.status === 200) {
    return response.json()
  } else {
    throw response.text()
  }
}
