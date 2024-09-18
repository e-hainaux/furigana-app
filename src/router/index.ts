import { createRouter, createWebHistory } from "vue-router";

import ConvertView from "../views/ConvertView.vue";

const routes = [{ path: "/", name: "convert", component: ConvertView }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
