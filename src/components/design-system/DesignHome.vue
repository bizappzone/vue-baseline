<template>
  <div class="ds">
    <p>Design System Home</p>
  </div>
  <div>
    <h1>Sample Application</h1>
    <SampleApp />
    <BaseTitle msg="Base Title component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SampleApp from "./design-sample/SampleApp.vue";
import BaseTitle from "./base/BaseTitle.vue";

export default defineComponent({
  name: "DesignHome",
  components: {
    SampleApp,
    BaseTitle,
  },
  setup() {
    //   add code
  },
});
</script>

<style></style>
