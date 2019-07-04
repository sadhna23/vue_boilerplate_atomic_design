<template>
  <div class="sticky-scroll" id="sticky_header">
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
  mounted() {},
  handleScroll() {
    // Followin code is used to add sticky navigation bar in IE. As position sticky does not work in IE we have to do it in javascript
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      // If Internet Explorer, return version number
      var header = document.getElementById("sticky_header");
      // I am commenting below line because this is causing sticky issue in IE.
      if (!window.sticky) {
        window.sticky = header.offsetTop;
      }
      if (window.pageYOffset > sticky) {
        header.style.position = "fixed";
        header.style.width = "100%";
      } else {
        if (window.pageYOffset < sticky && header.style.position != "static") {
          header.style.position = "static";
        }
      }
    }
    // End of Sticky navbar code for IE
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    delete window.sticky;
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
.stickyheader__items {
  margin: 10px 0;
  padding: 0;
  position: relative;
  max-width: 1600px;
  @include flexbox;
  @include flex-direction(column);
  @include media-breakpoint-up(lg) {
    @include flex-direction(row);
    @include align-items(stretch);
    width: 100%;
  }
  .items__item {
    border: 1px solid $bg-shgrey;
    padding: 20px;
    background: $bg-shgreylight;
    text-align: center;
    @include media-breakpoint-up(lg) {
      @include flex(1);
    }
  }
}

.sticky-scroll {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 75px;
  padding: 0;
  margin: 0;
  @include media-breakpoint-down(md) {
    height: 52px;
  }
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>