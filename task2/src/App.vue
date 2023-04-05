<template>
  <navBar v-if="!$route.meta.hideNavbar" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    navBar,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
}
</style>
