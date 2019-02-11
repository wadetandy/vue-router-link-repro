// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import { Auth } from "./auth";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.prototype.$auth = new Auth();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  router,
  template: "<App/>"
});
