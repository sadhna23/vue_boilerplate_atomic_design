<template>
  <div class="container__StickyHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>Sticky Header</p>
          <div class="row">
            <ul class="stickyheader__items col-sm-12">
              <li class="items__item">Financial Services</li>
              <li class="items__item">HealthCare</li>
              <li class="items__item">Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StickyHeader"
};
</script>
<style lang="scss" scoped>
@import "../../styles/main";

.container__StickyHeader {
  .stickyheader__items {
    @include flexbox;
    @include flex-direction(column);
    @include media-breakpoint-up(lg) {
      @include flex-direction(row);
    }
    .items__item {
    }
  }
}
</style>
