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
			}
		],
		sidebar: {
			'/home/': [
        {
          text: 'Home',
          items: [
            { text: 'Home', link: '/home/' },
            { text: 'Web Accessibility', link: '/a11y/' },
            { text: 'React', link: '/react/' },
						{ text: 'Vue.js', link: '/vue/' }
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
      '/react/': [
        {
          text: 'React',
          items: [
            { text: 'Index', link: '/react/' },
            { text: 'One', link: '/react/one' },
            { text: 'Two', link: '/react/two' }
          ]
        }
      ],
			'/vue/': [
        {
          text: 'Vue.js',
          items: [
            { text: 'Index', link: '/vue/' },
            { text: 'One', link: '/vue/one' },
            { text: 'Two', link: '/vue/two' }
          ]
        }
      ]
    }
	}
}