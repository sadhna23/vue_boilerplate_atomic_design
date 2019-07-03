<template>
  <div id="app">
    <div class="container no-padding">
      <div class="row">
        <div class="col-2 main__route">
          <SideNav />
        </div>
        <div class="col-10 main__container">
          <router-view>
            <childRouting  />
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import childRouting from "@/components/molecules/childRouting.vue";
import SideNav from "./components/molecules/SideNav";
export default {
  name: "App",
  components: {
    SideNav,
    childRouting
  }
};
</script>

<style lang="scss">
// _variables.scss, _mixins.scss & _grid.scss are loaded in globally using vue.config.js
// For more info visit https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/
@import "./styles/partials/_reset"; // Normalize
@import "./styles/partials/_fonts"; // Decalaring fonts per MWF guidelines
@import "./styles/partials/_typography"; // Declaring all typography
@import "./styles/main";
</style>
