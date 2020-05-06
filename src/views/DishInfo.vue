<template>
  <div>
    <div class="dish-header">
      <h3 class="title">{{ dish.title }}</h3>
      <h3 class="title">{{ dish['english-title'] }}</h3>
      <h5>Producer: {{ dish.owner ? dish.owner : '' }}</h5>
      <h5>Category: {{ dish.category }}</h5>
    </div>

    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>

    <address>{{ dish.location }}</address>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'DishInfo',
  props: ['id'],
  created() {
    // this.$store.dispatch('fetchEvent', this.id);
  },
  computed: {
    ...mapState(['allDishes']),
    dish() {
      return this.allDishes.find(dish => dish.id == this.id);
    }
  }
};
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.dish-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
