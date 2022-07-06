import { createRouter, createWebHistory } from "vue-router";
import AboutPageVue from "../views/AboutPage.vue";
import MainPageVue from "../views/MainPage.vue";

const routes = [
  { path: "/", name: "Home", component: MainPageVue },
  { path: "/about", name: "About", component: AboutPageVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
