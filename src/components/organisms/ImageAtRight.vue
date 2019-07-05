<template>
  <div>
    <section class="image-right">
      <div class="container image-right__width-limit">
        <div class="row">
          <div class="col-xl-6 col-xs-12 image-right__card image-right__card--left">
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
          <div class="col-xl-6 col-xs-12 image-right__card image-right__card--right"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="container width-limit">
        <CodeComponent :isJsAvailable="false">
          <template slot="html">
            <pre id="copy1">
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
          </template>
          <template slot="css">
            <pre id="copy2">
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
          </template>
          <template slot="js">
            <div>This content is from js section</div>
          </template>
        </CodeComponent>
      </div>
    </section>
  </div>
</template>

<script>
import CodeComponent from "@/components/organisms/CodeComponent.vue";
export default {
  components: {
    CodeComponent
  }
};
</script>

<style lang="scss" scoped>
.image-right {
  max-height: 100%;
  position: relative;
  margin-bottom: 100px;

  &__width-limit {
    max-width: 1600px;
  }

  &__card {
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
}
</style>
