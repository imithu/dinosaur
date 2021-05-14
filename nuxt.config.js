let APP_NAME    = 'Dinosaur';
let APP_URL     = "";
let APP_URL_API = "";


export default {
  ssr: false,
  target: 'static',

  head: {
    title: APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // header
        // bootstrap
          { rel: 'stylesheet', href: '/core/bootstrap_v5_0_1/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' },
        // misc_css
          { rel: 'stylesheet', href: '/core/misc_css_v1/breadcrumb.css' },
          { rel: 'stylesheet', href: '/core/misc_css_v1/color.css' },
          { rel: 'stylesheet', href: '/core/misc_css_v1/cursor.css' },
          { rel: 'stylesheet', href: '/core/misc_css_v1/fonts.css' },
          { rel: 'stylesheet', href: '/core/misc_css_v1/hover.css' },
          { rel: 'stylesheet', href: '/core/misc_css_v1/placeholder.css' },
        // google fonts
          { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bonbon&family=Monoton&display=swap' },
    ],
    script: [
      // footer
        // bootstrap
          { src: "/core/bootstrap_v5_0_1/js/bootstrap.bundle.min.js", body: true },
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,
  buildModules: [
  ],

  modules: [
    '@nuxtjs/pwa',
  ],


  pwa: {
    icon: {
      srcDir: '/icon.png'
    },
    manifest: {
      name: APP_NAME,
      lang: 'en',
      background_color: '#0d6efd',
      theme_color: '#0d6efd'
    },
    // workbox: {
    //   enabled: true
    // },
    meta: {
      theme_color: '#0d6efd' 
    }
  },


  build: {
  },


  publicRuntimeConfig: {
    env: {
      APP_NAME: APP_NAME,
      APP_TITLE: " || "+APP_NAME,
      APP_URL,
      APP_URL_API,
    }
  }
}
