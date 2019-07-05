<template>
  <div class="about">
    <ImageAtRight />
    <!-- <ImageAtLeft /> -->
  </div>
</template>

<script>
import ImageAtRight from "@/components/organisms/ImageAtRight.vue";
import ImageAtLeft from "@/components/organisms/ImageAtLeft.vue";
export default {
  components: {
    ImageAtRight,
    ImageAtLeft
  },
  props: {
    compName: String
  },
  mounted() {
    let data = {
      compName: this.$props.compName,
      isJsAvailable: false
    };
    this.bus.$emit("compName", data);
  }
};
</script>
