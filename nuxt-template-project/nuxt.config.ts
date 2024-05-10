// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  css: ['~/assets/css/custom-tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/content"],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})