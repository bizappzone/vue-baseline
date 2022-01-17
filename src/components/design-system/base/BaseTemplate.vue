<template>
  <div class="baz-message">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";

interface Message {
  title: string;
}

export default defineComponent({
  name: "XXX",
  props: {
    msg: String as PropType<string | number>,
  },
  setup(props) {
    // mounted
    onMounted(() => {
      console.log("%%% DS - XXX");
    });

    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.baz-message {
  @apply dark:bg-purple-800 bg-blue-400;
}
</style>
