<template>
  <ul class="code">
        <li>
          <router-link to="/html">View Html</router-link>
        </li>
        <li>
          <router-link to="/css">View Css</router-link>
        </li>
        <li v-if="isJsAvailable">
          <router-link to="/javascript">View JS</router-link>
        </li>
      </ul>
</template>

<script>
export default {
  props: {
    isJsAvailable: Boolean
  }
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
.code {
  @include flexbox;
  @include justify-content(space-around);
  background-color: lightgray;
}
</style>
