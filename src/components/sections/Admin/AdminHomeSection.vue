<template>
  <div class="">
    <p>Admin Home</p>
  </div>
  <div>
    <router-link
      to="/design"
      class="p-x-4 py-4 bg-blue-400"
      aria-label="Design system"
      >Design System</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminHomeSection",
  props: {},
  components: {},
});
</script>
