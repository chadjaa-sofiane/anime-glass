import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/modules-style/navbar'
import scroll from './modules/modules-style/scroll'
import getData from './modules/Data-modules/getData'
import Serach from './modules/Data-modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navbar,
        scroll,
        getData,
        Serach
    }
})