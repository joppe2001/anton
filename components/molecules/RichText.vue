<template>
  <div class="richTextWrapper" ref="wrapper">
    <div class="richText" :style="{ height: height }">
      <h1>{{ data.title }}</h1>
      <p :style="{ '-webkit-line-clamp': clampValue }">{{ data.paragraph }}</p>
      <button v-if="showButton" @click="toggleClamp" class="readMore">{{ clampText }}</button>
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

  const clampValue = ref(3);
  const showButton = ref(false);
  const height = ref('20vh');
  const wrapper = ref(null);

  const toggleClamp = () => {
  if (clampValue.value === 3) {
    clampValue.value = 'unset';
    showButton.value = false;
    height.value = 'auto';
  } else {
    clampValue.value = 3;
    showButton.value = true;
    height.value = 'auto';
  }
};

  const clampText = computed(() => {
    return clampValue.value === 3 ? 'Read More' : 'Read Less';
  });

  watch(
    () => props.data.paragraph,
    () => {
      clampValue.value = 3;
      showButton.value = true;
      height.value = '20vh';
    }
  );

  onMounted(() => {
    height.value = `${wrapper.clientHeight}px`;
    if (process.browser) {
      showButton.value = window.innerWidth < 768;
      window.addEventListener('resize', handleResize);
    }
  });

  onBeforeUnmount(() => {
    if (process.browser) {
      window.removeEventListener('resize', handleResize);
    }
  });

  const handleResize = () => {
    showButton.value = window.innerWidth < 768;
  };
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
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      border-radius: 10px;
      position: relative;

      h1 {
        font-size: 2rem;
        color: #333;
      }

      p {
        font-size: 1rem;
        color: #666;
        text-align: center;
        margin-top: 1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      button.readMore {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: none;

        @include for-device('mobile') {
          display: block;
          position: absolute;
          bottom: -18%;
          left: 50%;
          transform: translateX(-50%);
        } 
      }
    }
  }
</style>