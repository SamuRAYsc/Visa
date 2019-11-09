
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/sass/styles.sass'
  ],
  styleResources: {
    sass: ['~assets/sass/imports/_imports.sass']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
  },
  proxy: {
    '/base/': {
      target: process.env.NODE_ENV == 'production' ? 'http://api.visa.test' : 'http://api.visa.test',
      pathRewrite: { '^/base/': '' }
    },
    '/wp/': {
      target: process.env.NODE_ENV == 'production' ? 'http://api.visa.test/wp-json/' : 'http://api.visa.test/wp-json/',
      pathRewrite: { '^/wp/': '/wp/v2/' }
    },
    '/menus/': {
      target: process.env.NODE_ENV == 'production' ? 'http://api.visa.test/wp-json/' : 'http://api.visa.test/wp-json/',
      pathRewrite: { '^/menus/': '/menus/v1/' }
    },
    '/acf/': {
      target: process.env.NODE_ENV == 'production' ? 'http://api.visa.test/wp-json/' : 'http://api.visa.test/wp-json/',
      pathRewrite: { '^/acf/': '/acf/v3/' }
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
