<template>
  <div class="container__stickyheader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>Sticky Header</p>
          <StickyTop top="20" :scroll-y="scrollY" :titles="titles"></StickyTop>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StickyTop from "../molecules/StickyTop";
export default {
  name: "StickyHeader",
  components: {
    StickyTop
  },
  data() {
    return {
      scrollY: null,
      titles: ["Financial Services", "HealthCare", "Services"]
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollY = Math.round(window.scrollY);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/main";
.container__stickyheader {
  height: 900px;
}
</style>
