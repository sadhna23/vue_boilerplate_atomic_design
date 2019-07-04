<template>
  <div>
    <pre> 
    html {
     scroll-behavior: smooth;
    }
    .stickyheader__items {
      margin: 10px 0;
      padding: 0;
      position: relative;
      max-width: 1600px;
      @include flexbox;
      @include flex-direction(column);
      @include media-breakpoint-up(lg) {
        @include flex-direction(row);
        @include align-items(stretch);
        width: 100%;
      }
      .items__item {
        border: 1px solid $bg-shgrey;
        padding: 20px;
        background: $bg-shgreylight;
        text-align: center;
        @include media-breakpoint-up(lg) {
          @include flex(1);
        }
      }
    }

    .sticky-scroll {
      position: sticky;
      top: 0;
      z-index: 1;
      height: 75px;
      padding: 0;
      margin: 0;
      @include media-breakpoint-down(md) {
        height: 52px;
      }
      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }
    }
</pre>
  </div>
</template>