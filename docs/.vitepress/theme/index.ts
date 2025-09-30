import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import TuttiFanButton from '../../../src/TuttiFanButton/TuttiFanButton.vue' // 路径根据你的项目结构调整

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('TuttiFanButton', TuttiFanButton)
    // 可以继续注册其他组件
  }
}