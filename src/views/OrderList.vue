<template>
  <div>
    <h4>Ready for some SingCafe dishes?</h4>
    <form @submit.prevent="generateOrder">
      <div class="container -shadow" v-for="(dish, i) of allDishes" :key="i">
        <div class="order-title">{{ dish.title }}</div>
        <div class="order-button">Add to cart</div>
      </div>

      <h3>Name & Contact</h3>
      <div class="field">
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>

      <div class="field">
        <label>Mobile Number</label>
        <input type="number" />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  state: {
    order: {}
  },
  methods: {
    checkOut() {
      console.log('Check Out!');
    },
    generateOrder() {
      console.log('generate the order object');
      this.order = { a: 'order' };
      console.log(this.order);
    }
  },
  computed: {
    ...mapState(['allDishes'])
  }
};
</script>

<style scoped>
.container {
  padding-top: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.order-button {
  color: aqua;
}
.field {
  margin-bottom: 24px;
}
</style>
