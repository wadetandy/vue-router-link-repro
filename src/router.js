import VueRouter from "vue-router";

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
    {
      path: "/register",
      name: "register",
      component: require("./components/Register.vue")
    },
    {
      path: "/sign_out",
      name: "sign_out",
      component: require("./components/SignOut.vue")
    }
  ]
});

export default router;
