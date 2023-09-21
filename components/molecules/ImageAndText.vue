<!-- ./components/ImageAndText.vue -->

<template>
	<div
		class="image-text"
		:class="{
			'image-left': data.image_position === 'Left',
			'image-right': data.image_position === 'Right',
		}"
	>
		<NuxtImg :src="data?.image[0]?.url" alt="Image and Text" />
		<div>
			<h2>{{ data.title }}</h2>
			<p>{{ data.text }}</p>
		</div>
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

	console.log(props.data);
</script>
<style scoped>
	.image-text {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 2rem;
		background-color: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

		img {
			border-radius: 8px;
			margin-right: 1.5rem;
			image-resolution: from-image;
		}

		div {
			flex: 1;
			padding: 0 1rem;

			h2 {
				font-size: 2rem;
				color: #333;
				margin-bottom: 1rem;
			}

			p {
				font-size: 1rem;
				color: #666;
				line-height: 1.5;
				text-align: center;
			}
		}

		&.image-left {
			flex-direction: row;
		}

		&.image-right {
			flex-direction: row-reverse;
		}

		@media (max-width: 768px) {
			padding: 1rem;
			flex-direction: column;

			img {
				max-width: 100%;
				margin-right: 0;
				margin-bottom: 1rem;
			}

			h2 {
				font-size: 1.5rem;
			}

			p {
				font-size: 0.875rem;
			}
		}
	}
</style>
