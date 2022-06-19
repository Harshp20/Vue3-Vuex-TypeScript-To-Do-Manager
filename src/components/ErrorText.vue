<template>
  <div class="errorText">
    {{ $store.state.errorText }}
  </div>
</template>

<script>
import '../styles.css'
export default {
    name: 'ErrorText'
};
</script>
