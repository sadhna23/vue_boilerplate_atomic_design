<template>
  <div>css code
  <pre> 
    .section {
      &--image-left {
        max-height: 100%;
      }
    }

    .card {
      &--left {
        background-image: url("../../assets/governance_hero.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        position:  absolute;
        right:0;
        min-height:500px;
        width: 100%;
        @include media-breakpoint-down(lg){
          display:none;
        }
      }
      &--right {
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
