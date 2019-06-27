<template>
  <div class="home">
    <NavBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/organisms/NavBar.vue";
export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>
