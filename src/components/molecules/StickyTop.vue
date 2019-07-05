<template>
  <div class="stickytop" id="sticky_header">
    <button class="stickytop__dropdown" @click="toggleShow">Dropdown</button>
    <ul
      class="stickytop__titlewrapper titlewrapper--toggle col-sm-12"
      v-if="showMenu"
      :style="myStyle"
    >
      <li class="stickytop__title" v-for="(title, index) in titles" :key="index">{{title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "StickyTop",
  props: {
    titles: Array
  },
  data() {
    return {
      myStyle: {},
      originalTop: 0,
      selectedMenu: this.titles,
      isOpen: false,
      showMenu: true
    };
  },

  methods: {
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
          header.style.width = "81.14%";
          header.style.top = "-20px";
        } else {
          header.style.width = "100%";
          header.style.top = "0px";

          if (
            window.pageYOffset < sticky &&
            header.style.position != "static"
          ) {
            header.style.position = "static";
          }
        }
      }
      // End of Sticky navbar code for IE
    },
    toggleShow() {
      this.showMenu = !this.showMenu;
    },
    resizeHeader() {
      if (window.innerWidth > 768) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.resizeHeader);
  },
  mounted() {},
  destroyed() {
    delete window.sticky;
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resizeHeader);
  }
};
</script>
<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
.stickytop {
  position: relative;
  .stickytop__dropdown {
    display: block;
    width: 100%;
    @include media-breakpoint-up(lg) {
      display: none;
    }
  }
  .titlewrapper--toggle {
    @include flexbox;
  }
}
.stickytop__titlewrapper {
  padding: 0;
  margin: 0;
  @include flexbox;
  @include flex-direction(column);
  @include media-breakpoint-up(lg) {
    margin: 10px 0;
    @include flex-direction(row);
    @include align-items(stretch);
    width: 100%;
  }
}
.stickytop__title,
.stickytop__dropdown {
  border: 1px solid $bg-shgrey;
  padding: 20px;
  background: $bg-shgreylight;
  text-align: center;
  cursor: pointer;
  @include media-breakpoint-up(lg) {
    @include flex(1);
  }
}

.stickytop {
  position: sticky;
  top: 0px;
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