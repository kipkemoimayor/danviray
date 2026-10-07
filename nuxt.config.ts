export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'DanViray — Vehicle & Garage Solutions',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Compressor maintenance, vehicle and garage service consulting, with quotations, invoices, deliveries and payments managed in one secure workflow.'
        },
        { name: 'theme-color', content: '#0b1220' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  },
  compatibilityDate: '2024-09-01'
})
