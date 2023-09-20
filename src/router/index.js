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
    meta: {
        requiresAuth: true // Add meta field to indicate protected route
    }
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

/*function isLoggedIn() {
  return localStorage.getItem('token');
}*/

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/Login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;