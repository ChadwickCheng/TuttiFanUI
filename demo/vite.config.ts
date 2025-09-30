import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 让 @ 指向 demo/src 或直接引用组件库源码
      '@': path.resolve(__dirname, 'src'),
      // 如果你的组件库源码在 ../src，可以这样设置
      'tuttifan': path.resolve(__dirname, '../src'),
    },
  },
  server: {
    port: 5173, // 可自定义端口
    open: true, // 启动自动打开浏览器
  },
})