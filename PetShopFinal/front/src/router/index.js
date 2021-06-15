import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home")
  },
  {
    path: "/carrinho",
    name: "Carrinho",
    component: () => import("../views/Carrinho")/*,
    meta: { requiresAuth: true }*/
  },
  {
    path: "/funcionarios",
    name: "Funcionarios",
    component: () => import("../views/Funcionarios")/*,
    meta: { requiresAuth: true }*/
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: () => import("../views/Agenda")/*,
    meta: { requiresAuth: true }*/
  },
  {
    path: "/daypage",
    name: "DayPage",
    component: () => import("../views/DayPage")
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products")
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services")
  },
  {
    path: "/alterar",
    name: "Alterar",
    component: () => import("../views/Alterar")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register")
  },
  {
    path: "/registeradm",
    name: "RegisterAdm",
    component: () => import("../views/RegisterAdm")
  },
  {
    path: "/registerpet",
    name: "RegisterPet",
    component: () => import("../views/RegisterPet")
  },
  {
    path: "/registerfunc",
    name: "RegisterFunc",
    component: () => import("../views/RegisterFunc")
  },
  {
    path: "/registeritem",
    name: "RegisterItem",
    component: () => import("../views/RegisterItem")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile")
  },
  {
    path: "/pets",
    name: "Pets",
    component: () => import("../views/Pets")/*,
    meta: { requiresAuth: true }*/
  }
];

const router = new VueRouter({
  routes
});

/*router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    //need to login
  } else {
    next();
  }
});*/

export default router;
