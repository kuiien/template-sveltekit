import { error } from '@sveltejs/kit'

export async function load() {
  // simulate a fetch request
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    if (response.ok) {
      const post = await response.json()
      return {
        post
      }
    }

    throw error(404)
  } catch (e) {
    console.log(e)
    throw error(400, e.message)
  }
}
