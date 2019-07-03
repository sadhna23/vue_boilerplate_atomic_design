<template>
  <div>
    <ul class="child-routes">
        <router-link active-class="active" tag="li" :to="{name:`${data.compName}.Html`}">HTML CODE</router-link>
     
        <router-link active-class="active" tag="li" :to="{name:`${data.compName}.Css`}">CSS <CODE></CODE></router-link>
      
        <router-link v-if="data.isJsAvailable" active-class="active" tag="li" to="/javascript">View JS</router-link>
      
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
      data: {}
    };
  },
  created() {
    this.bus.$on("compName", data => {
      this.data = data;
    });
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
.child-routes {
  @include flexbox;
  @include justify-content(flex-start);
  background-color: $bg--grey; 
  font-family: $segoe--bold;
  padding : 0;
  li{
    padding:10px 25px;
    text-decoration:none;
    color: $text--white;
    cursor: pointer;
    &:hover{
      background-color: $bg--black;
      color: $text--white !important;
    }
  }
}
.active{
      background-color: $bg--white;
      color : $text--black !important;
      border-top : 1px solid $text--grey;
      border-left : 1px solid $text--grey;
      border-right : 1px solid $text--grey;
    }
</style>
