<template>
  <div class="home">
    <img alt="SingCafe" src="https://i.ibb.co/QY2b0cB/Sing-Cafe-board.jpg" />
    <HelloWorld msg="Welcome to my Vue.js menu-order App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>
