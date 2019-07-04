<template>
  <div>
    <section class="section section--image-right">
      <div class="container width-limit">
        <div class="row">
          <div class="col-xl-6 col-xs-12 card card--left">
            <h1>This is header</h1>
            <p>
              The Microsoft 365 E-Discovery and Data Subject Requests capability
              allows healthcareHCOs organizations to quickly access information
              and reports, and comply with discovery or other data and
              documentation requests. You can find data across Exchange Online,
              SharePoint Online, OneDrive for Business (including Teams and
              Groups), and public folders. The Microsoft 365 E-Discovery and
              Data Subject Requests capability allows healthcareHCOs
              organizations to quickly access information and reports, and
              comply with discovery or other data and documentation requests.
              You can find data across Exchange Online, SharePoint Online,
              OneDrive for Business (including Teams and Groups), and public
              folders.
            </p>
          </div>
          <div class="col-xl-6 col-xs-12 card card--right"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="container width-limit">
        <div class="row">
          <div class="col-12">
            <slot></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
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

.width-limit {
  max-width: 1600px;
}
</style>
