<template>
  <div>
    <h4>Ready for some SingCafe dishes?</h4>
    <form @submit.prevent="submitOrder">
      <!-- <div class="container -shadow" v-for="(dish, i) of allDishes" :key="i">
        <div class="order-title">{{ dish.title }}</div>
        <div class="order-button">Add to cart</div>
      </div>-->

      <div class="field">
        <select v-model="order.dish">
          <option v-for="(dish, i) of allDishes" :key="i">{{ dish.title }}</option>
        </select>
      </div>

      <h3>Address & Date</h3>
      <div class="field">
        <label>Postcode</label>
        <input type="number" />
      </div>

      <div class="field">
        <label>Date</label>
      </div>

      <h3>Name & Contact</h3>
      <div class="field">
        <label>Name</label>
        <input v-model="order.name" type="text" placeholder="Name" />
      </div>

      <div class="field">
        <label>Mobile Number</label>
        <input v-model="order.mobile" type="number" placeholder="Your mobile" />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import datepicker from 'vuejs-datepicker';

export default {
  name: 'OrderMenu',
  data() {
    return {
      order: this.generateFreshNewOrder()
    };
  },
  methods: {
    checkOut() {
      console.log('Check Out!');
    },
    submitOrder() {
      console.log('submit the order by method submitOrder');
      console.log(this.order);
      this.$store.dispatch('submitOrderAction', this.order);
    },
    createOrder() {},
    generateFreshNewOrder() {
      const id = Math.floor(Math.random() * 1000000);
      return {
        id: id,
        name: '',
        dish: '',
        mobile: '',
        postCode: '',
        address: '',
        date: ''
      };
    }
  },
  computed: {
    ...mapState(['allDishes'])
  },
  created() {
    this.$store.dispatch('fetchAllDishes');
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
