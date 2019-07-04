<template>
  <div>
    <button @click="copyClipboard()">Copy</button>
    <pre id="css_code">
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
  components: {},
  methods: {
    copyClipboard() {
      var elm = document.getElementById("css_code");
      var range;
      // for Internet Explorer

      if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(elm);
        range.select();
        document.execCommand("Copy");
      } else if (window.getSelection) {
        // other browsers

        var selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");
      }
    }
  }
};
</script>
