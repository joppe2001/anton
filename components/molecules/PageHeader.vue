<!-- ./components/PageHeader.vue -->

<template>
	<div class="page-header">
		<div class="page-header__container">
			<h1 v-if="data.heading">{{ data.heading }}</h1>
			<p v-if="data.text">{{ data.text }}</p>
			<NuxtImg :src="data.image[0].url" alt="Header Image" />
			<button v-if="data.cta_label">{{ data.cta_label }}</button>
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

<style scoped lang="scss">
	.page-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
		&__container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 2rem;
			background-color: #f9f9f9;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			margin: 1rem 0;
			border-radius: 10px;
			img {
				border-radius: 8px;
				margin-bottom: 1.5rem;
			}

			h1 {
				font-size: 2rem;
				color: #333;
				margin-bottom: 1rem;
			}

			p {
				font-size: 1rem;
				color: #666;
				text-align: center;
				margin-bottom: 1.5rem;
			}

			button {
				padding: 0.5rem 1rem;
				background-color: #007bff;
				color: #fff;
				border: none;
				border-radius: 4px;
				font-size: 1rem;
				cursor: pointer;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: #0056b3;
				}
			}

			@media (max-width: 768px) {
				padding: 1rem;

				h1 {
					font-size: 1.5rem;
				}

				p {
					font-size: 0.875rem;
				}

				button {
					padding: 0.375rem 0.75rem;
				}
			}
		}
	}
</style>
