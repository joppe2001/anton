<template>
  <NuxtImg :src="data.asset?.url" />
</template>

<script setup>
  defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>


<style scoped>
    img {
        width: 100%;
        height: 20vh;
        object-fit: cover;
    }
</style>