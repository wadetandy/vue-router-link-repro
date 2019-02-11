<template>
  <div>
    <ul v-if="$auth.currentUser">
      <router-link tag="li" :to="{ name: 'profile' }">
        <a>{{ $auth.currentUser.username }}</a>
      </router-link>
      <router-link tag="li" :to="{ name: 'sign_out' }">
        <a>Sign Out</a>
      </router-link>
    </ul>
    <ul v-else>
      <router-link tag="li" :to="{ name: 'register' }">
        <a>Register</a>
      </router-link>
      <router-link tag="li" :to="{ name: 'sign_in' }">
        <a>Sign In</a>
      </router-link>
    </ul>
  </div>
</template>
