<!-- OrganismsHeader.vue -->
<template>
  <div class="header">
    <!-- Business Icon and Name -->
    <div class="business-info">
      <NuxtImg
        :src="data.header_icon.url"
        alt="Business Icon"
        class="business-icon"
      />
      <span class="business-name">{{ data.header }}</span>
    </div>

    <!-- Navigation Links -->
    <nav class="nav-links">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/services">Services</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  });
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #272829;
    padding: 1.5rem;

    .business-info {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;

      .business-icon {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
      }

      .business-name {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }

    .nav-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      color: #d8d9da;

      @media (min-width: 768px) {
        justify-content: center;
      }
    }
  }
</style>
