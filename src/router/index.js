import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Thank from "../views/Thank.vue";
import Checkout from "../views/Checkout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/thanks",
    name: "thank",
    component: Thank
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
