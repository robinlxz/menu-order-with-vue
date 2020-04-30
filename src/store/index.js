import Vue from 'vue';
import Vuex from 'vuex';

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
  actions: {},
  modules: {}
});
