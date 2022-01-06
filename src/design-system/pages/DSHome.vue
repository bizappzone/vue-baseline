<template>
  <div class="ds-home">
    <HelloWorld msg="Design System Home" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "DSHomeView",
  components: {
    HelloWorld,
  },
  props: {
    msg: String,
  },
});
</script>
