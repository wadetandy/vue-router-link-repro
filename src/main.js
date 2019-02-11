// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import { Auth } from "./auth";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.prototype.$auth = new Auth();

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/sign_in",
      name: "sign_in",
      component: require("./components/SignIn.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: require("./components/ProfilePage.vue")
    },
    { path: "/register", name: "register" },
    { path: "/sign_out", name: "sign_out" }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  router,
  template: "<App/>"
});
