import Vue from 'vue'
import Vuex from 'vuex'

import carList from './model/carList'
import product from './model/product'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { //当前状态
    count: 0,
    
  },
  getters: {
      judge(state) {
      return state.count % 2 ===0 ? '偶数' : '奇数'
    }
    },
  mutations: { //声明同步的方法
    add(state,amount) {
      state.count+=amount
    },
    increase(state, amount) {
      state.count += amount
     
    },
     reduce(state) {
        state.count--
      }

},
  actions: { //声明异步的方法
    add({ commit }, { amount } ) {
      console.log(amount);
      setTimeout(() => {
        commit('add',amount)
      }, 1000);
    },
    increase({ commit }, { amount }  ) {
      //修改状态的唯一方法是提交mutation
      console.log(amount);
      commit('increase',amount );
    },
    reduce({ commit }) {
      // console.log(commit);
      commit('reduce');
    }

  },
  modules: { 
    carList,
    product
  }
})
