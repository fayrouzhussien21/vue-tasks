<template>
  <div>
    <h2 style="color: gray">Movie ID is {{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: "moviesDetails",
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style></style>
