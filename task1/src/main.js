import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import StudentComponent from "./components/Student.vue";
import AdminComponent from "./components/Admin.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: App,
    alias: "/home",
  },
  {
    path: "/users",
    component: StudentComponent,
  },
  {
    path: "/admins",
    component: AdminComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
