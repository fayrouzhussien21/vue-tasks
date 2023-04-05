<template>
  <div class="row justify-content-center">
    <h3 class="mb-5 col-7">All admins :</h3>
    <table class="table-light col-7">
      <thead style="background-color: antiquewhite">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in injectedD" :key="d.id">
          <th scope="row">{{ d.id }}</th>
          <td>{{ d.userName }}</td>
          <td>{{ d.userEmail }}</td>
          <td>{{ d.userRole }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["ValueFromParentAdmin"],
  name: "AdminComponent",
  components: {},
  data() {
    return {
      injectedD: this.ValueFromParentAdmin,
    };
  },
};
</script>

<style></style>
