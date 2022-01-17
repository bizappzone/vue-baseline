<template>
  <div class="footer">
    <div class="flex justify-between">
      <div class="flex space-x-7">
        <!-- footer -->

        <div class="footer-links">footer</div>
        <div class="footer-ds">
          <router-link to="/admin" class="nav-basic" aria-label="Admin system"
            >Admin Login</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppFooter",
  components: {},
  props: {},
  setup() {
    const compName = ref<string>("AppFooter");

    return {
      compName,
    };
  },
});
</script>

<style>
.footer {
  @apply flex flex-auto;
}
</style>
