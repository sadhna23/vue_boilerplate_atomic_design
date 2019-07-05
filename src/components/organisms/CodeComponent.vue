<template>
  <div class="container code-content">
    <div class="tabs">
      <a @click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']">HTML</a>
      <a @click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']">CSS</a>
      <a
        v-if="isJsAvailable"
        v-on:click="activetab=3"
        v-bind:class="[ activetab === 3 ? 'active' : '' ]"
      >JS</a>
    </div>

    <div v-if="activetab === 1" class="code-content__tabcontent">
      <slot name="html"></slot>
    </div>
    <div v-if="activetab === 2" class="code-content__tabcontent">
      <slot name="css"></slot>
    </div>
    <div v-if="activetab === 3" class="code-content__tabcontent">
      <slot name="js"></slot>
    </div>
    <div class="code-content__copy-button">
      <button @click="copyClipboard()">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeComponent",
  data() {
    return {
      activetab: 1
    };
  },
  props: {
    isJsAvailable: Boolean
  },
  methods: {
    copyClipboard() {
      let elmToCopy = "copy" + this.activetab;
      var elm = document.getElementById(elmToCopy);
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

<style lang="scss" scoped>
/* Style the tabs */
.tabs {
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -2px; // hide bottom border

  & a {
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid $border;
    border-right: none;
    background-color: $bg--darkwhite;
    border-radius: 10px 10px 0 0;
  }

  & a:last-child {
    border-right: 1px solid $border;
  }

  & a:hover {
    background-color: $bg--grey;
    color: $text--white;
  }
}

/* Styling for active tab */
.tabs a.active {
  background-color: $bg--white;
  color: $text--default;
  border-bottom: 2px solid $text--white;
  cursor: default;
}

/* Style the tab content */

.code-content {
  position: relative;

  &__tabcontent {
    padding: 30px;
    border: 1px solid $border;
    border-radius: 10px;
    box-shadow: 3px 3px 6px $bg--darkwhite;
  }

  &__copy-button {
    position: absolute;
    right: 40px;
    top: 60px;
  }
}
</style>
