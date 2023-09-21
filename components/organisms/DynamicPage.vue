<!-- DynamicPage.vue -->
<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error loading data.</div>
  <div v-else>
    <component
      v-for="(element, index) in stack"
      :key="element._id"
      :is="getComponent(element.__typename)"
      :data="element"
      :index="index"
      :url="element.url"
    ></component>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { GetPageBySlug } from "../queries/get-page-by-slug";

// Import the components
import PageHeader from "../molecules/PageHeader";
import ImageAndText from "../molecules/ImageAndText";
import TextComponent from "../atoms/TextComponent";

// Set up the components using an object for faster lookup
const components = {
  PageHeader,
  ImageAndText,
  TextComponent
};

const getComponent = (name) => components[name] || null;

// Get the slug prop
const props = defineProps(['slug']);

const { data, loading, error } = await useAsyncQuery(
  GetPageBySlug,
  {
    slug: props.slug,
  }
);

const stack = ref([]);
if (data && data.value.Page && data.value.Page.stack) {
  stack.value = data.value.Page.stack;
}

</script>
