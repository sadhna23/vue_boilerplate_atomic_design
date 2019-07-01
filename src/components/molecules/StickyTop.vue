<template>
  <div class="spacer">
    <ul class="stickyheader__items col-sm-12" :style="myStyle">
      <li class="items__item" v-for="(title, index) in titles" :key="index">{{title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "StickyTop",
  props: {
    top: String,
    scrollY,
    titles: Array
  },
  data() {
    return {
      myStyle: {},
      originalTop: 0
    };
  },
  mounted() {
    this.originalTop = this.$el.getBoundingClientRect().top;
  },
  watch: {
    scrollY() {
      const newTop = this.scrollY + +this.top - this.originalTop;

      if (newTop > 0) {
        this.$set(this.myStyle, "top", `${newTop}px`);
      } else {
        this.$delete(this.myStyle, "top");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/main";
.stickyheader__items {
  position: relative;
  @include flexbox;
  @include flex-direction(column);
  @include media-breakpoint-up(lg) {
    @include flex-direction(row);
    align-items: stretch;
    width: 100%;
  }
  .items__item {
    border: 1px solid #dcdcdc;
    padding: 20px;
    background: #d0d0d0;
  }
  .spacer {
    height: 80px;
  }
}
</style>

