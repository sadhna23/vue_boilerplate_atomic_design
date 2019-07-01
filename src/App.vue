<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-2 main__Route">
          <ul>
            <li class="route__navigation">
              <router-link to="/layout">Layout</router-link>
            </li>
            <li class="route route__navigation">
              <router-link to="/header">Header</router-link>
            </li>
          </ul>
        </div>
        <div class="col-10 main__Container">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// _variables.scss, _mixins.scss & _grid.scss are loaded in globally using vue.config.js
// For more info visit https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/
@import "./styles/partials/_reset"; // Normalize
@import "./styles/partials/_fonts"; // Decalaring fonts per MWF guidelines
@import "./styles/partials/_typography"; // Declaring all typography
@import "./styles/main";
</style>
