import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
state,
getters,
actions,
mutations,
modules
});

export default store;