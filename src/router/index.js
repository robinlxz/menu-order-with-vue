import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import OrderList from '../views/OrderList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: OrderList
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
