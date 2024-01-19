<script setup>
import auth from '~/middleware/auth';

definePageMeta({
  middleware: auth
})
</script>
<template>
  <div>
    <h1>Testing</h1>
  </div>
</template>