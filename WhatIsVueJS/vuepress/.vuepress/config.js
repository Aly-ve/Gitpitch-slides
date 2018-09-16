module.exports = {
  title: 'Vuepress',
  port: 8081,
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
