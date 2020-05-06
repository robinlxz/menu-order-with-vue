<template>
  <div>
    <h1>SingCafe Menu</h1>
    <DishCard v-for="(dish, i) in allDishes" :key="i" :dish="dish" />
    <a href="https://robinlxz.github.io/SingCafeDelivery">
      Full Menu with pictures
    </a>
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
