<template>
  <div class="row justify-content-center">
    <h3 class="mb-5 col-7">All users :</h3>
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
        <template v-for="(d, index) in injectedData" :key="d.id">
          <tr>
            <th scope="row">{{ d.id }}</th>
            <td>{{ d.userName }}</td>
            <td>{{ d.userEmail }}</td>
            <td>{{ d.userRole }}</td>
            <td>
              <button class="btn btn-danger" @click="$emit('delete', index)">
                Delete
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["ValueFromParent"],
  name: "StudentComponent",
  components: {},
  emits: ["delete"],
  created() {
    console.log(this.ValueFromParent); // injected value
  },
  data() {
    return {
      injectedData: this.ValueFromParent,
    };
  },
  methods: {
    handleDelete(id) {
      const arr = this.injectedData.filter((d) => d.id != id);
      this.injectedData = [...arr];
      console.log(this.injectedData);
      this.$emit("dataSend", id);
    },
  },
};
</script>

<style></style>
