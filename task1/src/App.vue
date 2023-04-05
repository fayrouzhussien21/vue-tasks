<template>
  <div
    class="d-flex justify-content-evenly mb-5"
    style="background-color: antiquewhite"
  >
    <a style="color: blue" class="btn" @click="formTorender = 'User'"> User </a>
    <a style="color: blue" class="btn" @click="formTorender = 'Admin'">
      Admin
    </a>
  </div>
  <KeepAlive>
    <div class="row justify-content-center mb-5">
      <form class="col-7" @submit.prevent="formHandling">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
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
          <input
            type="text"
            class="form-control"
            id="role"
            v-model="userRole"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </KeepAlive>
  <StudentComponent v-if="formTorender == 'User'" @delete="handleDelete" />
  <AdminComponent v-if="formTorender == 'Admin'" />
</template>

<script>
import { uuid } from "vue-uuid";
import StudentComponent from "./components/Student.vue";
import AdminComponent from "./components/Admin.vue";
export default {
  name: "App",
  components: {
    StudentComponent,
    AdminComponent,
  },
  data() {
    return {
      formTorender: "User",
      uuid: uuid.v1(),
      userEmail: "",
      userName: "",
      userRole: "",
      userValue: [],
      AdminValue: [],
    };
  },
  methods: {
    handleData(id) {
      const arr = this.userValue.filter((d) => d.id != id);
      this.userValue = [...arr];
      console.log("kjhggg", this.userValue);
    },
    handleDelete(id) {
      this.userValue.splice(id, 1);
    },
    formHandling(e) {
      e.preventDefault();
      if (this.userRole === "user") {
        this.userValue.push({
          userEmail: this.userEmail,
          userName: this.userName,
          userRole: this.userRole,
          id: uuid.v1(),
        });
      } else {
        this.AdminValue.push({
          userEmail: this.userEmail,
          userName: this.userName,
          userRole: this.userRole,
          id: uuid.v1(),
        });
      }

      this.userEmail = "";
      this.userName = "";
      this.userRole = "";
      console.log(this.userValue);
    },
  },
  provide() {
    return {
      ValueFromParent: this.userValue,
      ValueFromParentAdmin: this.AdminValue,
    };
  },
};
</script>

<style>
#app {
}
</style>
