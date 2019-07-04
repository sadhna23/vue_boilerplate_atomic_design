<template>
  <div class="about">
    <ImageAtLeft>
      <slot></slot>
    </ImageAtLeft>
  </div>
</template>

<script>
import ImageAtLeft from "@/components/organisms/ImageAtLeft.vue";
export default {
  components: {
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
