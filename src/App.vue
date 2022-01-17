<template>
  <div :class="rootState.theme" class="flex flex-col h-screen justify-between">
    <header class="h-20"><AppHeader /></header>
    <main class="mb-auto bg-primary-4-color">
      <router-view></router-view>
    </main>
    <footer class="h-10 bg-blue-500 dark:bg-purple-500"><AppFooter /></footer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import AppHeader from "@/components/structure/AppHeader.vue";
import AppFooter from "@/components/structure/AppFooter.vue";
// import ThemeHueType from "./components/structure/ThemeHueType";
import { useRootSiteStore } from "./stores/root-site";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const rootSite = useRootSiteStore();
    const rootState = rootSite.$state;
    console.log("%%% Current Theme:", rootState.theme);

    return {
      rootState,
    };
  },
});
</script>

<style lang="scss">
// add styles
</style>
