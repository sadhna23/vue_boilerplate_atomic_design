<template>
  <section>
    <div class="content-container">
      <div class="row">
        <div class="col-xl-6 col-lg-12" data-aos="fade-right">
          <AppParagraph :content="contentLeft"></AppParagraph>
        </div>
        <div class="col-xl-6 col-lg-12" data-aos="fade-left">
          <AppParagraph :content="contentRight"></AppParagraph>
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
    contentLeft: String,
    contentRight: String
  }
};
</script>
<style scoped lang="scss">
.content-container {
  p {
    padding-top: 15px;
    padding-bottom: 15px;
    color: $text--default;
    line-height: 24px;
  }
}
</style>