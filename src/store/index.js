import Vue from 'vue';
import Vuex from 'vuex';
import DishServices from '@/services/DishServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allDishes: [],
    allOrders: []
  },
  mutations: {
    SET_ALL_DISHES(state, allDishesData) {
      state.allDishes = allDishesData;
    },
    ADD_ORDER(state, orderObj) {
      state.allOrders.push(orderObj);
    }
  },
  actions: {
    fetchAllDishes({ commit }) {
      DishServices.getAllDishes()
        .then(response => {
          // console.log(response.data == undefined);
          commit('SET_ALL_DISHES', response.data);
        })
        .catch(error => {
          console.log('There is error for');
          console.log(error.response);
          commit('SET_ALL_DISHES', [
            {
              id: 1,
              title: '盐焗鸡腿饭',
              price: 6.8,
              size: 1,
              location: 'Lau Pa Sat',
              'english-title': 'Salted Baked Chicken Rice',
              owner: 'Chef Mao',
              category: 'Rice set',
              attendees: [
                {
                  id: 'abc123',
                  name: 'PSS'
                },
                {
                  id: 'def456',
                  name: 'XZ'
                }
              ]
            },
            {
              id: 5,
              title: '盐焗鸡腿干捞面',
              price: 6.8,
              size: 1,
              location: 'Lau Pa Sat',
              'english-title': 'Salted Baked Chicken dry noodle',
              owner: 'Chef Mao',
              category: 'Noodle set',
              attendees: [
                {
                  id: 'abc123',
                  name: 'Adam Jahr'
                },
                {
                  id: 'ghi789',
                  name: 'Beth Swanson'
                }
              ]
            },
            {
              id: 6,
              title: '鲜茄洋葱牛肉/猪扒',
              price: 15.8,
              size: '2~3',
              location: 'Lau Pa Sat',
              'english-title': 'Tomato and onion beef/pork',
              owner: 'Chef Mao',
              category: 'Cusine (no rice)',
              attendees: [
                {
                  id: 'abc123',
                  name: 'Adam Jahr'
                },
                {
                  id: 'ghi789',
                  name: 'Beth Swanson'
                }
              ]
            }
          ]);
        });
    },
    submitOrderAction({ commit }, { orderObj }) {
      console.log('orderObj in action:', orderObj);
      DishServices.postOrder(orderObj)
        .then(() => commit('ADD_ORDER', orderObj))
        .catch(error => {
          console.log('There is error for');
          console.log(error.response);
        });
    }
  },
  modules: {}
});
