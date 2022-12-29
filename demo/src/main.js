/*
 * @Author: win10 wr154941094@163.com
 * @Date: 2022-12-27 16:19:28
 * @LastEditors: win10 wr154941094@163.com
 * @LastEditTime: 2022-12-27 16:22:59
 * @FilePath: \demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import VideoTimeline from '@wanglin1994/video-timeline'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VideoTimeline)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
