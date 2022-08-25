import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'//引入elementui
import Element from 'element-ui'
import './assets/css/reset.css'//初始化CSS
import 'element-ui/lib/theme-chalk/index.css'//引入element-ui样式
import router from './router'//引入路由

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
	router,//将路由规则添加到vue实例上
	render: h => h(App),
}).$mount('#app')
