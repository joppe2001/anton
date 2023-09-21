<template>
	<div id="TextComponent">
		<h1 :style="{color: data.paragraph_color}">{{ data.paragraph }}</h1>
	</div>
</template>

<script setup>
	const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
  
</script>
