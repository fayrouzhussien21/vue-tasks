<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
      <h1 class="display-1 fw-bold" style="color: red">404</h1>
      <p class="fs-3" style="color: gray">
        <span style="color: red">Opps!</span> Page not found.
      </p>
      <p class="lead" style="color: gray">
        The page you’re looking for doesn’t exist.
      </p>
      <router-link to="/" class="btn btn-primary">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorPage",
};
</script>
<style></style>
