import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"
import "./assets/deep.css"

Vue.config.productionTip = false

//定义接口根地址
import axios from "axios"
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3001/api"
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
