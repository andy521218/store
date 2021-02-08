import Vue from 'vue'
import App from './App'
import apiReq from './utils.js'

Vue.config.productionTip = false
Vue.prototype.$axios = apiReq

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
