<template>
  <main-nav />
</template>
<!-- thêm script để vsc ko hiện warning -->
<script>
import MainNav from "./components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav: MainNav,
  },
};
</script>
