export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'How-we-work-devxhub',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }, {}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css/animate.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    '~/plugins/vue-typed-js',
    '@/plugins/aos.client',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //
    /* '@nuxtjs/eslint-module', */

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-animejs',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },

  googlefonts: {
    families: {
      Roboto: false,
      'Josefin+Sans': true,
      'DM Sans': true,

      Poppins: {
        wght: [300, 400],
        ital: [300],
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@neneos/nuxt-animate.css'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
