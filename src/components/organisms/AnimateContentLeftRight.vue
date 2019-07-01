<template>
  <section>
    <div class="container content-container">
      <div class="row">
        <div class="col-xl-6 col-lg-12" data-aos="fade-right">
          <AppParagraph :content="content"></AppParagraph>
        </div>
        <div class="col-xl-6 col-lg-12" data-aos="fade-left">
          <AppParagraph :content="content"></AppParagraph>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppParagraph from "@/components/atoms/AppParagraph.vue";
export default {
  name: "AnimateContentLeftRight",
  components: {
    AppParagraph
  },
  props: {
    content: String
  }
};
</script>
<style scoped lang="scss">
.content-container {
  p {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>