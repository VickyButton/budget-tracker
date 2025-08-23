// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module', '@nuxtjs/tailwindcss'],
  devtools: {
    enabled: true,
  },
  compatibilityDate: '2025-07-15',
});
