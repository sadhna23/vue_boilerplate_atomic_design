<template>
  <div class="about">
    <ImageAtLeft />
    <div class="col-12">
      <slot></slot>
    </div>
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
    this.bus.$emit("compName", this.$props.compName);
  }
};
</script>
