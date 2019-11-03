import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isTab:true
  },
  mutations: {
    turn(state,pey){
      state.isTab = pey;
    }
  },
  actions: {

  }
})
