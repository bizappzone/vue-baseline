<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <PageTitle msg="Welcome to Vue application" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/sections/PageTitleSection.vue";

export default defineComponent({
  name: "HomePage",
  props: {},
  components: {
    PageTitle,
  },
});
</script>
