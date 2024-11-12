// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false, prefix: 'fn-' }],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    typeCheck: true,
  },

  modules: ['@vesp/nuxt-fontawesome'],

  fontawesome: {
    icons: {
      solid: ['coffee'],
      regular: ['file-lines'],
      brands: ['linkedin','github'],
    },
  },
});
