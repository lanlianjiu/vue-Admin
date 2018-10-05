import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import permission from './modules/permission'
import user from './modules/user'
import getters from './getters'
import menu from './modules/menu'
import basechart from './modules/basechart'
const store = new Vuex.Store({
    modules: {
        permission,
        user,
        menu,
        basechart
    },
    getters,
    strict: false
})

export default store
