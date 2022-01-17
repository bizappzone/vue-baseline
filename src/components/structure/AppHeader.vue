<template>
  <div class="baz-header">
    <!-- Navbar goes here -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- banner -->
            <AppBanner />
            <!-- Primary Navbar items -->
            <AppHeaderLinks />
          </div>
          <!-- Secondary Navbar items -->
          <AppHeaderSecondary />
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-blue-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <div class="hidden mobile-menu">
        <ul class="">
          <li class="active">
            <router-link to="/" class="baz-mobile-link" aria-label="Home"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/assess"
              class="baz-mobile-link"
              aria-label="Assessments"
              >Assessments</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin"
              class="baz-mobile-link"
              aria-label="Admin Login"
              >Admin</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import AppBanner from "./AppBanner.vue";
import AppHeaderLinks from "./AppHeaderLinks.vue";

import AppHeaderSecondary from "./AppHeaderSecondary.vue";

export default defineComponent({
  name: "AppHeader",
  components: { AppBanner, AppHeaderLinks, AppHeaderSecondary },
  props: {},
  setup() {
    const compName = ref<string>("AppHeader");

    return {
      compName,
    };
  },
});
</script>
<style scoped>
.baz-header {
  @apply bg-blue-400;
}
.baz-mobile-link {
  @apply block text-sm px-2 py-4 hover:bg-blue-400 transition duration-300;
}
.baz-mobile-link:active {
  @apply block text-sm px-2 py-4 text-white bg-blue-400 font-semibold;
}
</style>
