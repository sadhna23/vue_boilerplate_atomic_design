<template>
  <div>
    <ul class="code">
      <li>
        <router-link :to="{name:`${compName}.Html`}">View Html</router-link>
      </li>
      <li>
        <router-link :to="{name:`${compName}.Css`}">View Css</router-link>
      </li>
      <li>
        <router-link to="/javascript">View JS</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    // isJsAvailable: Boolean
  },
  data() {
    return {
      compName: ""
    };
  },
  created() {
    this.bus.$on("compName", data => {
      this.compName = data;
    });
  },
  mounted() {}
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
