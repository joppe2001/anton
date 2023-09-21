<!-- DynamicPage.vue -->
<template>
	<div v-if="loading">Loading...</div>
	<div v-else-if="error">Error loading data.</div>
	<div v-else>
		<!-- Render Header component if page_header exists -->
		<organismsHeader v-if="pageHeader" :data="pageHeader" />

		<!-- Render stack components -->
		<component
			v-for="(element, index) in stack"
			v-if="useStack"
			:key="element._id"
			:is="getComponent(element.__typename)"
			:data="element"
			:index="index"
			:url="element.url"
		></component>

		<!-- Render page component -->
		<component
			v-if="!useStack && pageComponent"
			:is="getComponent(pageComponent.__typename)"
			:data="pageComponent"
		></component>
	</div>
</template>

<script setup>
	import { ref, defineProps } from "vue";
	import { GetPageBySlug } from "../queries/get-page-by-slug";

	// Import the components
	import PageHeader from "../molecules/PageHeader";
	import ImageAndText from "../molecules/ImageAndText";
	import TextComponent from "../atoms/TextComponent";

	// Set up the components using an object for faster lookup
	const components = {
		PageHeader,
		ImageAndText,
		TextComponent,
	};

	const getComponent = (name) => components[name] || null;

	// Get the props
	const props = defineProps({
		slug: String,
		useStack: {
			type: Boolean,
			default: true,
		},
	});

	const { data, loading, error } = await useAsyncQuery(GetPageBySlug, {
		slug: props.slug,
	});

	const stack = ref([]);
	const pageHeader = ref(null);
	const pageComponent = ref(null);

	if (data && data.value.Page) {
		if (data.value.Page.stack) {
			stack.value = data.value.Page.stack;
		}
		if (data.value.Page.page_header) {
			pageHeader.value = data.value.Page.page_header;
		}
	}
</script>
