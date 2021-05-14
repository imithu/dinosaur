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
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css', integrity: 'sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x', crossorigin: 'anonymous' },
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
          { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js", integrity: 'sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4', crossorigin: 'anonymous', body: true },
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
