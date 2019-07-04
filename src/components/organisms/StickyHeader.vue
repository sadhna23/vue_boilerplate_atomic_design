<template>
  <section class="container__stickyheader">
    <div class="container">
      <div class="row">
        <div class="col-12 container__stickyheader-wrapper">
          <StickyTop :titles="titles"></StickyTop>
          <div class="container__stickheader-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi veritatis voluptatibus consequuntur quaerat sed laborum suscipit nulla, doloribus repellat illum ducimus rem laudantium magni, iusto natus nostrum ad officiis!</p>
          </div>
          <div class="container__stickyheader-codeview col-12">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import StickyTop from "../molecules/StickyTop";
export default {
  name: "StickyHeader",
  components: {
    StickyTop
  },
  props: {
    compName: String
  },
  data() {
    return {
      titles: ["Financial Services", "HealthCare", "Services"]
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollY = Math.round(window.scrollY);
    });
    let data = {
      compName: this.$props.compName,
      isJsAvailable: false
    };
    this.bus.$emit("compName", data);
  }
};
</script>
<style lang="scss" scoped>
.container__stickyheader-wrapper {
  padding: 0;
}
.container__stickheader-para {
  padding: 20px 30px;
}
</style>
