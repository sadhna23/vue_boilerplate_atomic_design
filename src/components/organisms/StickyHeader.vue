<template>
  <div>
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
          </div>
        </div>
      </div>
    </section>
    <section class="stickyheader__codeview col-12">
      <div class="container width-limit">
        <CodeComponent :isJsAvailable="false">
          <template slot="html">
            <pre id="copy1">
              &lt;section class="sticky-scroll" id="sticky_header"&gt;
                &lt;ul class="stickyheader__items col-sm-12"&gt;
                  &lt;li class="items__item"&gt;
                      Financial Services
                  &lt;/li&gt;
                  &lt;li class="items__item"&gt;
                      HealthCare
                  &lt;/li&gt;
                  &lt;li class="items__item"&gt;
                      Services
                  &lt;/li&gt;
                &lt;/ul&gt;
              &lt;/section&gt;
            </pre>
          </template>
          <template slot="css">
            <pre id="copy2"> 
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
          </pre>
          </template>
          <template slot="js">
            <pre id="copy3"></pre>
          </template>
        </CodeComponent>
      </div>
    </section>
  </div>
</template>
<script>
import StickyTop from "../molecules/StickyTop";
import CodeComponent from "@/components/organisms/CodeComponent.vue";
export default {
  name: "StickyHeader",
  components: {
    StickyTop,
    CodeComponent
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
