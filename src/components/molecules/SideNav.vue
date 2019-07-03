<template>
  <ul>
    <li class="route__navigation">
      <router-link to="/layout">Layout</router-link>
    </li>
    <li class="route route__navigation">
      <router-link to="/header">Header</router-link>
    </li>
    <li class="route route__navigation">
      <router-link to="/sticky">Sticky Header</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "SideNav",
  mounted() {}
};
</script>
