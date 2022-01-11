<template>
  <div>
    <!-- Website Logo -->
    <a href="#" class="flex items-center py-4 px-2">
      <img src="../../assets/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
      <span class="font-semibold text-gray-500 text-lg">App Name</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppBanner",
  components: {},
  props: {},
  setup() {
    const compName = ref<string>("AppBanner");

    return {
      compName,
    };
  },
});
</script>

<style></style>
