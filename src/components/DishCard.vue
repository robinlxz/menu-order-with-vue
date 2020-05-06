<template>
  <router-link
    class="dish-link"
    :to="{ name: 'dish-info', params: { id: dish.id } }"
  >
    <div class="dish-card -shadow">
      <div class="title">
        <h4>{{ dish.title }}</h4>
        <h4>{{ dish['english-title'] }}</h4>
        <BaseIcon name="unlock">Price: {{ dish.price }}</BaseIcon>
        <div>
          <BaseIcon name="users">Size: {{ dish.size }}</BaseIcon>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    dish: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.dish-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.dish-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.dish-card > .title {
  margin: 0;
}
.dish-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
h4 {
  margin: 0.1rem;
}
</style>
