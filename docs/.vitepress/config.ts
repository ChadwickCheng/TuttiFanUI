import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TuttiFanUI 文档',
  description: 'TuttiFanUI 组件库使用说明',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    sidebar: [
      {
        text: '导航',
        items: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide' },
          {
            text: '基础组件',
            items: [
              { text: 'Button-按钮', link: '/components/TuttiFanButton' },
            ]
          }
        ]
      }
    ]
  }
})