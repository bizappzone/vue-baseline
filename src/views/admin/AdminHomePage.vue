<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <PageTitle msg="Welcome to Admin Home" />
  </div>
  <div class="as">
    <AdminLoginSection />
  </div>
  <div class="as">
    <AdminHomeSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/sections/PageTitleSection.vue";
import AdminLoginSection from "@/components/sections/Admin/AdminLoginSection.vue";
import AdminHomeSection from "@/components/sections/Admin/AdminHomeSection.vue";

export default defineComponent({
  name: "AdminHomePage",
  props: {},
  components: {
    PageTitle,
    AdminHomeSection,
    AdminLoginSection,
  },
});
</script>
