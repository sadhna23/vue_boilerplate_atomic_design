<template>
  <div id="app">
    <div class="container no-padding">
      <div class="row">
        <div class="col-2 main__route">
          <SideNav />
        </div>
        <div class="col-10 main__container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideNav from "./components/molecules/SideNav";
export default {
  name: "App",
  components: {
    SideNav
  }
};
</script>

<style lang="scss">
@import "./styles/main";
</style>
