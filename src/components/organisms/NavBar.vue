<template>
  <div class="nav-bar">
    <div class="nav-bar-cell left">
      <AppLogo />
    </div>
    <div class="nav-bar-cell center">
      <HorizontalNav
        :links="links"
      />
    </div>
    <div class="nav-bar-cell right">
      <AppLink
        label="Github"
        path="https://github.com/sakihet/vue-atomic-design-template"
        :isNewWindow='true'
      />
    </div>
  </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppLogo from '../atoms/AppLogo'
import HorizontalNav from '../molecules/HorizontalNav'

export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        {
          path: '/',
          label: 'Index'
        },
        {
          path: '/atoms',
          label: 'Atoms'
        },
        {
          path: '/molecules',
          label: 'Molecules'
        },
        {
          path: '/organisms',
          label: 'Organisms'
        }
      ]
    }
  },
  components: {
    AppLink,
    AppLogo,
    HorizontalNav
  }
}
</script>