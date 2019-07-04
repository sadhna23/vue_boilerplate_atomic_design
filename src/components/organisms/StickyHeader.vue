<template>
  <section class="stickyheader">
    <div class="container">
      <div class="row">
        <div class="col-12 stickyheader__wrapper">
          <StickyTop :titles="titles"></StickyTop>
          <div class="stickheader__para">
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
          <div class="stickyheader__codeview col-12">
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
.stickyheader__wrapper {
  padding: 0;
}
.stickheader__para {
  padding: 20px 30px;
}
</style>
