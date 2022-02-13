<template>
  <div>
    <p data-testid="login-text">{{ loginText }}</p>
    <button data-testid="toggle-button" @click="toggleLogin">
      Toggle login
    </button>
  </div>
</template>

<script>
export default {
  name: "UserLogin",

  data: () => ({
    isLogged: false,
  }),

  computed: {
    loginText() {
      return this.isLogged ? "Logged user" : "Guest";
    },
  },

  methods: {
    toggleLogin() {
      this.isLogged = !this.isLogged;
    },
  },
};
</script>
