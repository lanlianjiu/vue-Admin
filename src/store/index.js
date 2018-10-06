import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import permission from './modules/permission'
import user from './modules/user'
import getters from './getters'
import menu from './modules/menu'
import basechart from './modules/basechart'
import dashboard from './modules/dashboard'
import getMsgtabs from './modules/getMsgtabs'
import baseForm from './modules/baseForm'
import dragList from './modules/dragList'
const store = new Vuex.Store({
    modules: {
        permission,
        user,
        menu,
        basechart,
        dashboard,
        getMsgtabs,
        baseForm,
        dragList
    },
    getters,
    strict: false
})

export default store
