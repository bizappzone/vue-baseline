<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <PageTitle msg="Welcome to KPI Home" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/sections/PageTitleSection.vue";

export default defineComponent({
  name: "KPI Home",
  props: {},
  components: {
    PageTitle,
  },
});
</script>
