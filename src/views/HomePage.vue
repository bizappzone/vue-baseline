<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <MessageSection msg="Welcome to Vue application" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageSection from "@/components/business-components/MessageSection.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    MessageSection,
  },
});
</script>
