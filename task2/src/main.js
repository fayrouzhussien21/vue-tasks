import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import errorPage from "./components/Error-page.vue";
import homePage from "./components/homepage.vue";
import moviesDetails from "./components/moviesdetails.vue";
import addMovie from "./components/Add-movie.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: homePage,
    alias: "/home",
  },
  {
    path: "/Moviesdetails/:id",
    component: moviesDetails,
  },
  {
    path: "/Add",
    component: addMovie,
  },
  {
    path: "/:NotFound(.*)*",
    component: errorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
