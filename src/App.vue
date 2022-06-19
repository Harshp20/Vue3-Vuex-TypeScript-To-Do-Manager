<template>
  <ToDos />
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import ToDos from "./components/ToDos.vue";

export default defineComponent({
  name: "App",
  components: {
    ToDos,
  },
});
</script>
