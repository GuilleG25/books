const FENV = process.env.FENV || 'env'
require('dotenv').config({ path: `${process.cwd()}/env/.${FENV}` })
const BASE_APP = process.env.BASE_APP || '/'
export default {
  loading: true,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'books',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${BASE_APP}favicon.ico` },
      {
        href: `${BASE_APP}css/bootstrap.min.css`,
        rel: 'stylesheet',
        type: 'text/css',
      },
      {
        href: `${BASE_APP}css/dataTables.bootstrap4.min.css`,
        rel: 'stylesheet',
        type: 'text/css',
      },
      {
        href: `${BASE_APP}css/typography.css`,
        rel: 'stylesheet',
        type: 'text/css',
      },
      {
        href: `${BASE_APP}css/style.css`,
        rel: 'stylesheet',
        type: 'text/css',
      },
      {
        href: `${BASE_APP}css/responsive.css`,
        rel: 'stylesheet',
        type: 'text/css',
      },
      {
        href: `https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.15.7/theme-chalk/index.min.css`,
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    script: [
      { src: `${BASE_APP}js/jquery.min.js` },
      { src: `${BASE_APP}js/popper.min.js` },
      { src: `${BASE_APP}js/bootstrap.min.js` },
      { src: `${BASE_APP}js/jquery.dataTables.min.js` },
      { src: `${BASE_APP}js/dataTables.bootstrap4.min.js` },
      { src: `${BASE_APP}js/jquery.appear.js` },
      { src: `${BASE_APP}js/countdown.min.js` },
      { src: `${BASE_APP}js/waypoints.min.js` },
      { src: `${BASE_APP}js/jquery.counterup.min.js` },
      { src: `${BASE_APP}js/wow.min.js` },
      { src: `${BASE_APP}js/apexcharts.js` },
      { src: `${BASE_APP}js/slick.min.js` },
      { src: `${BASE_APP}js/select2.min.js` },
      { src: `${BASE_APP}js/owl.carousel.min.js` },
      { src: `${BASE_APP}js/jquery.magnific-popup.min.js` },
      { src: `${BASE_APP}js/smooth-scrollbar.js` },
      { src: `${BASE_APP}js/lottie.js` },
      { src: `${BASE_APP}js/core.js` },
      { src: `${BASE_APP}js/charts.js` },
      { src: `${BASE_APP}js/animated.js` },
      { src: `${BASE_APP}js/kelly.js` },
      { src: `${BASE_APP}js/maps.js` },
      { src: `${BASE_APP}js/worldLow.js` },
      { src: `${BASE_APP}js/raphael-min.js` },
      { src: `${BASE_APP}js/morris.js` },
      { src: `${BASE_APP}js/morris.min.js` },
      { src: `${BASE_APP}js/flatpickr.js` },
      { src: `${BASE_APP}js/style-customizer.js` },
      { src: `${BASE_APP}js/chart-custom.js` },
      { src: `${BASE_APP}js/custom.js` },
      { src: `${BASE_APP}sw.js` },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/methods-firebase',
    '@/plugins/element-ui',
    { src: '@/plugins/simple-validator.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: ['auth'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/pwa'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-toastification/nuxt',
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ,
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING,
          appId: process.env.APP_ID,
          databaseURL: process.env.DATABASE_URL,
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false,
            },
            ssr: false,
          },
          firestore: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
    manifest: {
      name: 'Books',
      lang: 'es',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
