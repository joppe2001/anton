<!-- ./components/PageHeader.vue -->

<template>
  <div class="page-header">
    <img
      v-if="data.logo"
      :src="data.logo.url"
      alt="Company Logo"
      class="company-logo"
    />

    <!-- Hamburger menu for mobile -->
    <button
      @click="toggleMenu"
      class="hamburger"
      :class="{ 'is-active': menuOpen }"
    >
      <svg viewBox="0 0 32 32">
        <path
          class="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path class="line" d="M7 16 27 16"></path>
      </svg>
    </button>

    <!-- Links for desktop -->
    <div class="page-header__container desktop-links">
      <div class="links">
        <NuxtLink class="button" to="/">home</NuxtLink>
        <NuxtLink class="button" to="portfolio">portfolio</NuxtLink>
        <NuxtLink class="button" to="diensten">Diensten</NuxtLink>
        <NuxtLink class="button" to="tarieven">Tarieven</NuxtLink>
        <NuxtLink class="button" to="contact">Contact</NuxtLink>
      </div>
    </div>

    <!-- Dropdown links for mobile -->
    <div v-if="menuOpen" class="page-header__container mobile-links">
      <div class="links" ref="linkRef">
        <NuxtLink class="button-87" to="/" @click="menuOpen = false"
          >home</NuxtLink
        >
        <NuxtLink class="button-87" to="portfolio" @click="menuOpen = false"
          >portfolio</NuxtLink
        >
        <NuxtLink class="button-87" to="diensten" @click="menuOpen = false"
          >Diensten</NuxtLink
        >
        <NuxtLink class="button-87" to="tarieven" @click="menuOpen = false"
          >Tarieven</NuxtLink
        >
        <NuxtLink class="button-87" to="contact" @click="menuOpen = false"
          >Contact</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

  const menuOpen = ref(false);

  const linkRef = ref(null);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;

    if (menuOpen.value) {
      // Give Vue's rendering mechanism a bit of time to update the DOM
      // Then trigger the animation.
      nextTick(() => {
        animateLinks();
      });
    }
  };

  //use the webAnimation API to animate the links in the mobile menu
  const animateLinks = () => {
    const links = linkRef.value.children;
    const stagger = 100; // delay in milliseconds
    const duration = 300; // duration in milliseconds

    for (let i = 0; i < links.length; i++) {
      links[i].animate(
        [
          {
            opacity: 0,
            transform: 'translateX(100px)',
          },
          {
            opacity: 1,
            transform: 'translateX(0)',
          },
        ],
        {
          delay: stagger * i,
          duration: duration,
          fill: 'forwards',
        }
      );
    }
  };

  onMounted(() => {
    console.log(linkRef.value);
    if (menuOpen.value) {
      animateLinks();
    }
  });
  watch(linkRef, newVal => {
    if (newVal) {
      console.log(linkRef.value);
      if (menuOpen.value) {
        animateLinks();
      }
    }
  });
</script>

<style scoped lang="scss">
  .page-header {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;

    .button {
      background: #fff;
      border: none;
      padding: 13px 20px;
      display: inline-block;
      font-size: 15px;
      font-weight: 600;
      width: auto;
      text-transform: uppercase;
      cursor: pointer;
      transform: skew(-15deg);
    }

    a {
      display: inline-block;
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 100%;
      left: 0;
      background: rgb(20, 20, 20);
      opacity: 0;
      z-index: -1;
      transition: all 0.5s;
    }

    .button:hover {
      color: #fff;
    }

    .button:hover::before {
      left: 0;
      right: 0;
      opacity: 1;
    }

    .company-logo {
      position: absolute;
      left: 2rem;
      height: 50px;
      border-radius: 50%;
    }

    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .company-logo {
        left: 1rem;
        height: 35px;
      }
    }
  }
  .hamburger {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: none; /* hidden by default */

    svg .line {
      fill: none;
      stroke: #3c4245;
      stroke-width: 2;
    }
  }

  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition:
      stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger.is-active svg {
    transform: rotate(-45deg);
  }

  .hamburger.is-active svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  .page-header__container.desktop-links {
    display: block; /* visible by default */
  }

  .page-header__container.mobile-links {
    display: none; /* hidden by default */
    position: absolute;
    right: 1rem;
    top: 100%;
    width: auto;
  }
  .page-header__container.mobile-links .links .button-87 {
    opacity: 0;
    transform: translateX(100px);
    backdrop-filter: blur(0);

    &:hover {
      color: #fff;
      transform: scale(1.1);
    }
    &:focus {
      transform: translateY(-10px);
    }
  }

  .page-header__container.mobile-links .links .button-87::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    background: rgb(20, 20, 20);
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  .page-header__container.mobile-links .links .button-87:hover::before,
  .page-header__container.mobile-links .links .button-87:focus::before {
    left: 0;
    right: 0;
    opacity: 1;
  }

  .page-header__container.mobile-links .links .button-87 {
    background: #fff;
    border: none;
    padding: 13px 20px;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    width: auto;
    text-transform: uppercase;
    cursor: pointer;
  }

  .page-header__container.mobile-links .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    backdrop-filter: blur(10px);
    // backdrop blur with color
    background-color: rgba(22, 18, 18, 0.5);
    padding: 1rem;
    position: absolute;
    right: 0;
    button {
      background-color: #719192 !important;
      background: none;
      --color: white;
    }
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .page-header {
      height: 60px;
    }
    .hamburger {
      display: flex; /* show hamburger on mobile */
      position: absolute;
      top: 10%;
    }

    .links {
      //   margin-top: 1rem;
      flex-direction: column;
      padding: 1rem;
      position: absolute;
      right: 0;
      button {
        // margin: 0.2rem 0;
        background-color: #719192 !important;
        border-radius: 5px;
        background: none;
        --color: white;
      }
    }

    .page-header__container.desktop-links {
      display: none; /* hide desktop links on mobile */
    }

    .page-header__container.mobile-links {
      display: block; /* show mobile links dropdown on mobile */
      background-color: transparent;
    }

    .company-logo {
      left: 1rem;
      height: 40px; /* slightly smaller logo for mobile */
    }
  }
</style>
