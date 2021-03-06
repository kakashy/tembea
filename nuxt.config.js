export default {
  // Target: https://go.nuxtjs.dev/config-target
	target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tembea',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tembea Kenya. We are a proud agency that offers customized travel packages within the country' },
	    {
	hid: 'twitter:title',
		    name: 'twitter:title',
		    content: 'Tembea Kenya!'
	    },
	    {
	hid: 'twitter:url',
		    name: 'twitter:url',
		    content: 'https://tembea.vercel.app'
	    },
	{ hid: 'twitter:image', name: 'twitter:image', content: './static/amani-nation-LTh5pGyvKAM-unsplash-min.jpg'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
	  'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Tembea Travel App',
      short_name: 'Tembea',
      theme_color: '#FFD450',
      lang: 'en'
    },
	icon: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
