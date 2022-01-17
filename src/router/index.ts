import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/assess",
    name: "assess",
    component: () =>
      import(/* webpackChunkName: "assess" */ "../views/AssessmentPage.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(
        /* webpackChunkName: "admin" */ "../views/admin/AdminHomePage.vue"
      ),
  },
  {
    path: "/kpi",
    name: "kpi",
    component: () =>
      import(/* webpackChunkName: "kpi" */ "../views/admin/KPIPage.vue"),
  },
  {
    path: "/design",
    name: "design",
    component: () =>
      import(
        /* webpackChunkName: "design" */ "../components/design-system/DesignHome.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
