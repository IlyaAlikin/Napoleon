import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Biography from "../pages/Biography.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/biography",
      name: "about",
      component: Biography,
    },
  ],
});

export default router;
