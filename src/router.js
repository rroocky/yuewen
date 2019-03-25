import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mobile from "./views/mobile.vue";
import Products from "./views/products.vue";
import Cooperation from "./views/cooperation.vue";
import News from "./views/news.vue";
import Contact from "./views/contact.vue";
import Logon from "./views/logon.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        // 标记组件是否需要被缓存
        keepAlive: true
      }
    },
    {
      path: "/mobile",
      name: "mobile",
      component: Mobile,
      meta: {
        keepAlive: true
      },

    },
    {
      path: "/products",
      name: "products",
      component: Products,
      meta: {
        keepAlive: true
      },
      beforeEnter(to, from, next) {
        if (window.localStorage.getItem("yuewen")) {
          //用户已登录
          next();
        } else {
          next({ path: "/logon" });
        }
      }
    },
    {
      path: "/cooperation",
      name: "cooperation",
      component: Cooperation,
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/logon",
      name: "logon",
      component: Logon,
      meta: {
        keepAlive: false
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
