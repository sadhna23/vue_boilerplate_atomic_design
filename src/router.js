import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import Layout from "./views/Layout.vue";
// import Header from "./views/Header.vue";
import HTMLCode from "@/components/molecules/HTMLCode.vue";
import CSSCode from "@/components/molecules/CSSCode.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/layout",
      name: "Layout",
      component: () => import("./views/Layout.vue"),
      children: [
        {
          path: "/html",
          component: HTMLCode
        },
        {
          path: "/css",
          component: CSSCode
        }
      ]
    },
    {
      path: "/header",
      name: "header",
      component: () => import("./views/Header.vue")
    }
  ]
});
