<!-- pages/ProductsPage.vue -->
<template>
  <div>
    <h1>Our Services</h1>
    <ServiceCard
      v-for="service in services"
      :key="service.id"
      :serviceName="service.name"
      :description="service.description"
      :price="service.price"
    />
  </div>
</template>

<script setup>
import { useServicesStore } from '../store/services';

const store = useServicesStore();
const services = store.services;
console.log(services);
</script>

<style scoped>
/* CSS code here */
</style>
