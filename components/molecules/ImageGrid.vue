<template>
  <div class="wrapper">
    <Swiper
      class="swiper-cards"
      :modules="[SwiperEffectCoverflow]"
      :slides-per-view="1"
      :loop="false"
      :effect="'coverflow'"
      :centeredSlides="true"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
    >
      <SwiperSlide v-for="element in assetGrid" :key="element?.url">
        <div class="swiper-zoom-container grain">
          <NuxtImg :src="element?.url" :alt="element.__typeName" />
        </div>
      </SwiperSlide>
    </Swiper>
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

  const assetGrid = computed(() => {
    return props.data.asset_grid;
  });

  console.log('grid', props.data);
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    overflow: hidden;

    .swiper-container,
    .swiper-cards {
      width: 30%;
      height: 100%;

      @media (max-width: 768px) {
        width: 70%;
      }

      @media (max-width: 480px) {
        width: 80%;
      }
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;

      .swiper-zoom-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover .img-text {
          opacity: 0;
        }
      }

      img {
        object-fit: cover;
      }
    }
  }
</style>
