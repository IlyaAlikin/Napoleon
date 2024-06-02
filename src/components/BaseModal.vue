<template>
  <div @keydown.esc="modalClose()" tabindex="-1" ref="modal" class="modal">
    <div class="modal__link" @click="modalClose()"></div>
    <div class="modal__content">
      <div class="modal__close" @click="modalClose()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          class="modal__close-icon"
        >
          <path
            d="M1.8 18L0 16.2L7.2 9L0 1.8L1.8 0L9 7.2L16.2 0L18 1.8L10.8 9L18 16.2L16.2 18L9 10.8L1.8 18Z"
            style="fill: var(--gray-color)"
          />
        </svg>
      </div>
      <div class="modal__top">
        <h2 class="modal__title">
          {{ title }}
        </h2>
        <button class="modal__volume" @click="playAudio()">
          <font-awesome-icon :icon="['fas', 'volume-off']" />
        </button>
      </div>
      <div class="modal__wrapper">
        <div v-if="images">
          <swiper
            :slides-per-view="1"
            :space-between="10"
            :modules="modules"
            :pagination="{
              clickable: true,
            }"
            class="modal__slider"
          >
            <swiper-slide v-for="image in images">
              <img :src="image" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <p class="modal__description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const modal = ref(null);

const props = defineProps({
  title: String,
  description: String,
  images: Array,
});

onMounted(() => {
  modal.value.focus();
  console.log(modal.value);
});

const { emit } = getCurrentInstance();

const modalClose = () => {
  emit("opening-request");
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2.5px);
  z-index: 12;
  inset: 0px;
}

.modal__top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.modal__volume {
  font-size: 32px;
  cursor: pointer;
  transform: translateY(1px);
}
.modal__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 6;
  cursor: pointer;
}

.modal__content {
  border-radius: 10px;
  background: var(--white-color);
  max-width: 810px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 45px 45px 45px;
  margin: 0 auto;
  z-index: 7;
}

.modal__title {
  text-align: center;
  font-weight: 400;
  font-size: clamp(18px, 3vw, 22px);
}

.modal__title:has(.for-applicants__modal-title) {
  margin: 20px 0px;
}

.modal__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.modal__slider {
  max-width: 460px;
}

.modal__slider img {
  max-width: 460px;
  max-height: 300px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__btns {
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  margin: 0 auto;
}

.modal__btn {
  text-align: center;
  display: block;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px 50px;
  line-height: 140%;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.modal__close {
  text-align: right;
}

.modal__description {
  font-size: clamp(14px, 2vw, 16px);
  max-height: 340px;
  overflow-y: auto;
  padding-right: 5px;
}

.modal__close-icon {
  cursor: pointer;
}

@media (max-width: 992px) {
  .modal__content {
    padding: 30px 35px 35px 45px;
  }

  .modal__slider {
    max-width: 320px;
  }
  .modal__slider img {
    max-width: 320px;
  }

  .modal__volume {
    font-size: 22px;
  }

  .modal__description {
    max-height: 220px;
  }
  .modal__content {
    padding: 30px 25px 25px 25px;
  }

  .modal__top {
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .modal__top {
    gap: 15px;
  }
}
@media (max-width: 375px) {
  .modal__slider {
    max-width: 280px;
  }
  .modal__slider img {
    max-width: 280px;
  }
}
</style>
