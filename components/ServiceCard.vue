<!-- components/ServiceCard.vue -->
<template>
  <div class="service-card">
    <h3>{{ serviceName }}</h3>
    <p>{{ description }}</p>
    <span class="price">{{ price }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

</script>

<!-- <style scoped>
.service-card {
  /* CSS styles here */
}
</style> -->
