<template>
  <div class="richTextWrapper">
    <div class="richText">
      <h1>{{ data.title }}</h1>
      <p>{{ data.paragraph }}</p>
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
@import '../../mixins/for-device.scss';
  .richTextWrapper {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    background-color: #f9f9f96b;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @include for-device('mobile') {
      height: 35vh;
    }
    .richText {
      text-align: center;;
      flex-direction: column;
      margin: 1rem 0;
      border-radius: 10px;

      h1 {
        font-size: 2rem;
        color: #333;;
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
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
</style>
