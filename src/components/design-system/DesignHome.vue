<template>
  <div class="ds">
    <p>Design System Home</p>
  </div>
  <div>
    <h1>Sample Application</h1>
    <SampleApp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SampleApp from "./design-sample/SampleApp.vue";

export default defineComponent({
  name: "DesignHome",
  components: {
    SampleApp,
  },
  setup() {
    //   add code
  },
});
</script>

<style></style>
