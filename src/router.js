import Vue from "vue";
import Router from "vue-router";
import StickyHeader from "./components/organisms/StickyHeader";
import Home from "./views/Home.vue";
// import Layout from "./views/Layout.vue";
// import Header from "./views/Header.vue";
import HTMLCode from "@/components/molecules/HTMLCode.vue";
import CSSCode from "@/components/molecules/CSSCode.vue";
import HtmlCodeSticky from "@/components/molecules/HtmlCodeSticky.vue";
import CssCodeSticky from "@/components/molecules/CssCodeSticky.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "/home",
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
      props: { compName: "Layout" },
      component: () => import("./views/Layout.vue"),
      children: [
        {
          name: "Layout.Html",
          path: "html",
          component: HTMLCode
        },
        {
          name: "Layout.Css",
          path: "css",
          component: CSSCode
        }
      ]
    },
    {
      path: "/sticky",
      name: "Sticky",
      component: StickyHeader,
      props: {
        compName: "Sticky"
      },
      children: [
        {
          name: "Sticky.Html",
          path: "html",
          component: HtmlCodeSticky
        },
        {
          name: "Sticky.Css",
          path: "css",
          component: CssCodeSticky
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
