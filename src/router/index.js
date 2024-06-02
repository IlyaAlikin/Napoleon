import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Biography from "../pages/Biography.vue";
import Timeline from "../pages/Timeline.vue";
import Army from "../pages/Army.vue";

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
    {
      path: "/timeline",
      name: "timeline",
      component: Timeline,
    },
    {
      path: "/army",
      name: "army",
      component: Army,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
