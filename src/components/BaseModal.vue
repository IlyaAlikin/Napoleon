<template>
  <div @keydown.esc="modalClose()" tabindex="-1" ref="modal" class="modal">
    <div class="modal__link" @click="modalClose()"></div>
    <div class="modal__content">
      <div class="modal__close" @click="modalClose()">Закрыть</div>
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
  font-size: 22px;
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
}
.modal__description {
}

.modal__slider {
  max-width: 460px;
}

.modal__slider img {
  max-width: 460px;
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
  font-size: 16px;
}

/* .modal__btn_yellow {
  background: var(--main-color);
}

.modal__btn_white {
  background: var(--main-color);
} */
</style>
