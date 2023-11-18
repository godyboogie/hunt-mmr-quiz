// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/hunt-star-quiz/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  css: ['~/assets/css/main.scss', '~/assets/css/fonts.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_variables.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxt/image'
  ]
})