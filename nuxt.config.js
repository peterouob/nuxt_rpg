import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  image: {
    cloudflare: {
      baseURL: 'https://rpg-nuxt-app.hellolinpeter.workers.dev'
    }
  },
  build: {
    transpile: ['vuetify','vue-barcode-reader'],
  },
  nitro: {
    preset: 'cloudflare', // 預設為 node-server
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
