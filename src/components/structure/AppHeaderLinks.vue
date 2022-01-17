<template>
  <!-- Header links -->
  <div class="hidden md:flex items-center space-x-1">
    <router-link to="/" class="nav-active" aria-label="Home">Home</router-link>
    <router-link to="/assess" class="nav-basic" aria-label="Assessment"
      >Assessment</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppHeaderLinks",
  components: {},
  props: {},
  setup() {
    const compName = ref<string>("AppHeaderLinks");

    return {
      compName,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-active {
  @apply py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold;
}
.nav-basic {
  @apply py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300;
}
</style>
