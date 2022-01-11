<template>
  <!-- Sub Header links -->
  <div class="hidden md:flex items-center space-x-3">
    <p class="profile">Logged on as: XXX XXX</p>
    <router-link to="/" class="nav-second-active" aria-label="Profile"
      >Profile</router-link
    >
    <router-link to="/" class="nav-second-active" aria-label="Account Settings"
      >Settings</router-link
    >
    <router-link to="/" class="nav-second-active" aria-label="Help"
      >Help</router-link
    >

    <div>
      <AppTheme />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppTheme from "./AppTheme.vue";

export default defineComponent({
  name: "AppHeaderSecondary",
  components: {
    AppTheme,
  },
  props: {},
  setup() {
    const compName = ref<string>("AppHeaderSecondary");

    return {
      compName,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-second-active {
  @apply py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300;
}
.nav-basic {
  @apply py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300;
}
</style>
