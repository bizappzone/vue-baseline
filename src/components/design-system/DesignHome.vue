<template>
  <div class="ds">
    <p>Design System Home</p>
  </div>
  <div>
    <TestAppHome />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestAppHome from "../design-system/test-app/TestAppHome.vue";

export default defineComponent({
  name: "DesignHome",
  components: {
    TestAppHome,
  },
  setup() {
    //   add code
  },
});
</script>

<style></style>
