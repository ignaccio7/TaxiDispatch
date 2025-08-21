import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },

    {
      path: "/app",
      component: MainLayout,
      children: [
        {
          path: "main",
          name: "main",
          component: () => import("@/views/MainView.vue"),
        },
        {
          path: "servicios",
          name: "service",
          component: () => import("@/views/ServiceView.vue"),
        },
        {
          path: "historial",
          name: "history",
          component: () => import("@/views/HistoryView.vue"),
        },

        {
          path: "vehiculos",
          name: "vehicles",
          component: () => import("@/views/vehicles/VehiclesPage.vue"),
        },
        {
          path: "personal",
          name: "staff",
          component: () => import("@/views/staff/StaffView.vue"),
        },
        {
          path: "usuarios",
          name: "users",
          component: () => import("@/views/users/UserView.vue"),
        },
      ],
    },
  ],
});

export default router;
