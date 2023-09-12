<template>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button @click="navigateToAbout">Go to About Page</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    methods: {
      navigateToAbout() {
        this.$router.push({ name: "About" });
      },
    },
  };
  </script>
  