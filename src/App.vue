<template>
  <div id="app">
    <div class="container no-padding">
      <div class="row">
        <div class="col-2 main__Route">
          <ul class="no-padding">
            <li class="route__navigation">
              <router-link to="/layout">Layout</router-link>
            </li>
            <li class="route route__navigation">
              <router-link to="/header">Header</router-link>
            </li>
            <li class="route route__navigation">
              <router-link to="/sticky">Sticky Header</router-link>
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
@import "./styles/main";
</style>
