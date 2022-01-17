<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <PageTitle msg="Welcome to Assessment Page" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/sections/PageTitleSection.vue";

export default defineComponent({
  name: "AssesmentPage",
  props: {},
  components: {
    PageTitle,
  },
});
</script>
