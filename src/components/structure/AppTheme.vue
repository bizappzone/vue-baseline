<template>
  <div class="theme-switcher">
    <button class="nav-basic" v-if="theme === 'light'" @click="toggleTheme">
      Dark Theme
    </button>
    <button class="nav-basic" v-else @click="toggleTheme">Light Theme</button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import ThemeHueType from "./ThemeHueType";
import { useStore } from "vuex";

export default defineComponent({
  name: "AppTheme",
  components: {},
  props: {},
  setup() {
    const compName = ref<string>("AppTheme");
    const theme = ref<ThemeHueType>("light");
    const store = useStore();

    const toggleTheme = () => {
      console.log("** Toggle Theme clicked");
      if (theme.value === "dark") {
        console.log("** set to light");
        theme.value = "light";
        // process.isClient && localStorage.setItem('theme', 'light');
        store.dispatch("themeLight");
      } else {
        console.log("** set to dark");
        theme.value = "dark";
        store.dispatch("themeLight");
        // store.dispatch("setCurrentTheme", {
        //   currentTheme: "light",
        // });
      }
    };

    return {
      compName,
      toggleTheme,
      currentTheme: computed(() => store.state.currentTheme),
    };
  },
});
</script>
<style lang="scss" scoped>
.nav-active {
  @apply py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold;
}
.nav-basic {
  @apply py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300;
}
</style>
