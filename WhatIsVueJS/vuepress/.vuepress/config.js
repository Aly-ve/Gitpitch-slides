module.exports = {
  title: 'Vuepress',
  port: 8082,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About me', link: '/aboutme' }
    ],
    sidebar: [
      '/',
      '/blog/'
    ]
  }
}
