<template>
  <div class="dark flex flex-col h-screen justify-between">
    <header class="h-15 bg-red-500"><AppHeader /></header>
    <main class="mb-auto h-10 bg-green-500"><router-view></router-view></main>
    <footer class="h-10 bg-blue-500"><AppFooter /></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/structure/AppHeader.vue";
import AppFooter from "@/components/structure/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    // TODO
  },
});
</script>

<style></style>
