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

      <div class="field">
        <label>Special needs</label>
        <input
          v-model="order.specialNeeds"
          type="text"
          placeholder="Any special needs for the dish"
        />
      </div>

      <h3>Address & Date</h3>
      <div class="field">
        <label>Postcode</label>
        <input v-model="order.postcode" type="number" />
      </div>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="order.date" :highlighted="highlightedDate" />
      </div>

      <div class="field">
        <label>Address</label>
        <input v-model="order.address" type="text" placeholder="Address for delivery" />
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
      <input type="submit" value="Make Order" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import datepicker from 'vuejs-datepicker';

export default {
  components: {
    datepicker
  },
  name: 'OrderMenu',
  data() {
    return {
      order: this.generateFreshNewOrder(),
      todayDate: new Date()
    };
  },
  methods: {
    submitOrder() {
      if (this.validateOrder(this.order)) {
        this.$store
          .dispatch('submitOrderAction', {
            orderObj: this.order
          })
          .then((this.order = this.generateFreshNewOrder()));
      } else {
        alert('Please fill in all the info');
      }
    },
    validateOrder() {
      return false;
    },
    generateFreshNewOrder() {
      const id = Math.floor(Math.random() * 1000000);
      return {
        id: id,
        name: '',
        dish: '',
        mobile: '',
        postcode: '',
        address: '',
        date: this.todayDate,
        specialNeeds: ''
      };
    }
  },
  computed: {
    ...mapState(['allDishes']),
    highlightedDate() {
      if (this.order.postcode == 670148) {
        return { days: [2, 4] };
      } else {
        return { days: [1, 3, 5] };
      }
    }
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
