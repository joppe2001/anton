<!-- ./components/ImageAndText.vue -->

<template>
	<div
		class="image-text"
		:class="{
			'image-left': data.image_position === 'Left',
			'image-right': data.image_position === 'Right',
		}"
	>
		<img :src="data.image[0].url" alt="Image and Text" />
		<div>
			<h2>{{ data.title }}</h2>
			<p>{{ data.text }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				required: true,
			},
      index: {
        type: Number,
        required: true,
      },
		},
	};
</script>
