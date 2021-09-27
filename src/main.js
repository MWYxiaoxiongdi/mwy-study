import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import Mock from '@/mock'//模拟数据
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
