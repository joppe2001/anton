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
        max-height: 400px; /* Adjust this value as needed */
        object-fit: cover;
        object-position: center;
    }
</style>
