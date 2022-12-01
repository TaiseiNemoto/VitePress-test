export default {
	lang: 'ja',
	title: 'UX Team Development Guideline',
	description: 'This is UX Team Development Guideline.',
	themeConfig: {
	editLinks: true,
	editLinkText: 'このページをgithubで編集',
	nav: [
			{
				text: 'ナビゲーション',
				items: [
					{ text: 'Home', link: '/home/' },
					{ text: 'Web Accessibility', link: '/a11y/' },
					{ text: 'React', link: '/react/' },
					{ text: 'Vue', link: '/vue/' }
				],
			},
			{
				text: '公式リンク',
				items: [
					{
						text: 'VitePress',
						link: 'https://vitepress.vuejs.org',
					},
					{
						text: 'Vite',
						link: 'https://vitejs.dev/',
					},
					{
						text: 'Vue',
						link: 'https://v3.ja.vuejs.org/',
					},
					{
						text: 'github pages',
						link: 'https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages',
					},
				],
			},
			{
				text: 'コミュニティ',
				items: [
					{
						text: 'vuejs-jp',
						link: 'https://vuejs-jp.org/',
					},
				],
			},
		],
		sidebar: {
			'/home/': [
        {
          text: 'Home',
          items: [
            { text: 'Home', link: '/home/' },
            { text: 'Web Accessibility', link: '/a11y/' },
            { text: 'React', link: '/react/' },
						{ text: 'Vue', link: '/vue/' }
          ]
        }
      ],
      '/a11y/': [
        {
          text: 'Web Accessibility',
          items: [
            { text: 'ウェブアクセシビリティとは', link: '/a11y/' }
          ]
        }
      ],
      '/React/': [
        {
          text: 'React',
          items: [
            { text: 'Index', link: '/bar/' },
            { text: 'One', link: '/bar/one' },
            { text: 'Two', link: '/bar/two' }
          ]
        }
      ]
    }
	}
}