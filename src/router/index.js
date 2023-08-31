import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Competition from "@/views/Competition.vue";
import Login from "@/views/Login.vue";
import Detail from "@/views/DetailCompetition.vue";
import Admin from "@/views/AdminPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Competition",
    name: "Competition",
    component: Competition,
  },
  {
    path: "/Detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;