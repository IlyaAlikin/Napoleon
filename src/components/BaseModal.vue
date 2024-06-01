<template>
  <div @keydown.esc="modalClose()" tabindex="-1" ref="modal" class="modal">
    <div class="modal__link" @click="modalClose()"></div>
    <div class="modal__content">
      <div class="modal__close" @click="modalClose()">Закрыть</div>
      <div class="modal__img">
        <slot name="img"></slot>
      </div>
      <h2 class="modal__title">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";

const modal = ref(null);

const props = defineProps({
  title: String,
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
  margin-bottom: 50px;
}

.modal__title:has(.for-applicants__modal-title) {
  margin: 20px 0px;
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

/* .modal__btn_yellow {
  background: var(--main-color);
}

.modal__btn_white {
  background: var(--main-color);
} */
</style>
