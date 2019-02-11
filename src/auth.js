import Vue from "vue";

export const Auth = Vue.extend({
  data() {
    return {
      currentUser: null
    };
  },
  computed: {
    signedIn() {
      return !!this.currentUser;
    }
  },
  methods: {
    setCurrentUser(user) {
      console.log(user);
      this.currentUser = user;
    }
  }
});
