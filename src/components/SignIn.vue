<template>
  <div>
    <h2>Sign In</h2>
    <a @click="signIn">Click to sign in</a>
  </div>
</template>

<script>
export default {
  methods: {
    signIn() {
      this.$auth.setCurrentUser({ username: "testuser", id: 12345 });
    }
  }
};
</script>
