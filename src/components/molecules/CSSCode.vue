<template>
  <div>
    css code
    <pre>
    .section {
      &--image-right {
        max-height: 100%;
        position: relative;
      }
    }

    .card {
      &--right {
        background-image: url("../../assets/governance_hero.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        right: 0;
        height: 100%;
        width: 100%;

        @include media-breakpoint-down(lg) {
          display: none;
        }
      }

      &--left {
        padding-top: 100px;
        padding-bottom: 100px;
      }
    }
</pre>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {}
};
</script>
