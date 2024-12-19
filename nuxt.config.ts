// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
app:{
head:{
  htmlAttrs:{
    dir:"rtl",
    // class:'light',
    'data-mode':"dark"
  }
}
},
  tailwindcss: {
    // Options
    cssPath: ['~/assets/sass/tailwind.scss', { injectPosition: "first" }],
  },
  css: [
    '~/assets/sass/main.scss'
  ],
  vite: {
    vue: {
      // template: {
      //   transformAssetUrls,
      // },
    },
    define: {
      "process.env.DEBUG": false,
    },
    build: {

    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @use "@/assets/sass/abstracts" as *;
          `,
        },
      },
    },
  },
})