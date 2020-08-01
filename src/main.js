import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter("short",function(value){
  if(value.length > 25) return `${value.substring(0, 25)} ...`
  else return value
})
