<template>
  <div>
    <button @click="copyClipboard()">Copy</button>

    <pre id="copy">
    &lt;section class="section section--image-left"&gt;
      &lt;div class="container-fluid"&gt;
        &lt;div class="row"&gt;
          &lt;div class="col-xl-6 col-sm-12 card card--right"&gt;
            &lt;h1&gt; This is heading &lt;/h1&gt;
            &lt;p&gt; This is paragraph &lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="col-xl-6 col-sm-12 card card--left"&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
</pre>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {},
  methods: {
    copyClipboard() {
      var elm = document.getElementById("copy");
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
