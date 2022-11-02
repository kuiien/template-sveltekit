import path from 'path'
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve('./src/lib'),
      $static: path.resolve('./static')
    }
  },
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
