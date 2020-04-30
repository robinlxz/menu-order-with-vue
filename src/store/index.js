import Vue from 'vue';
import Vuex from 'vuex';
import DishServices from '@/services/DishServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allDishes: []
  },
  mutations: {
    SET_ALL_DISHES(state, allDishesData) {
      state.allDishes = allDishesData;
    }
  },
  actions: {
    fetchAllDishes({ commit }) {
      DishServices.getAllDishes('/dishes')
        .then(response => {
          commit('SET_ALL_DISHES', response.data);
        })
        .catch(error => {
          console.log('There is error for');
          console.log(error.response);
        });
    }
  },
  modules: {}
});
