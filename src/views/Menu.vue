<template>
  <div>
    <h1>SingCafe Menu</h1>
    <!-- <p>created is not excuted</p> -->
    <!-- <div id="menu">
      <ul>
        <li v-for="(dish, i) in allDishes" :key="i">{{ dish.title }}</li>
      </ul>
    </div>-->
    <DishCard v-for="(dish, i) in allDishes" :key="i" :dish="dish" />
  </div>
</template>

<script>
import DishServices from '@/services/DishServices.js';
import { mapState } from 'vuex';
import DishCard from '@/components/DishCard.vue';

export default {
  name: 'Menu',
  components: {
    DishCard
  },
  created() {
    this.$store.dispatch('fetchAllDishes');
  },
  computed: {
    ...mapState(['allDishes'])
  }
};
</script>

<style scoped></style>
