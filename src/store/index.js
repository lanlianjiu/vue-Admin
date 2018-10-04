import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import permission from './modules/permission'
import user from './modules/user'
import getters from './getters'

const store = new Vuex.Store({
  modules: {
    permission,
    user
  },
  getters,
  strict: false
})

export default store
