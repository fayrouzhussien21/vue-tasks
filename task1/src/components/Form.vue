<template>
  <div class="row justify-content-center">
    <form class="col-7" @submit.prevent="formHandling">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="userEmail"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="userName"
        />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <input type="text" class="form-control" id="role" v-model="userRole" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "FormComponent",
  components: {},
  data() {
    return {
      uuid: uuid.v1(),
      userEmail: "",
      userName: "",
      userRole: "",
      formValue: [],
    };
  },
  methods: {
    formHandling(e) {
      e.preventDefault();
      this.formValue.push({
        userEmail: this.userEmail,
        userName: this.userName,
        userRole: this.userRole,
        id: uuid.v1(),
      });
      this.$emit("dataSend", this.formValue);
      this.userEmail = "";
      this.userName = "";
      this.userRole = "";
    },
  },
};
</script>

<style></style>
