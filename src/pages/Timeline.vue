<template>
  <section class="full-screen">
    <div class="full-screen__body">
      <h1 class="full-screen__title">Таймлайн</h1>
      <div class="full-screen__content">
        <p class="full-screen__text">
          Сдесь собраны все важнейшие события в жизни Наполеона Бонапарта I в
          хронологическом порядке
        </p>
        <a class="full-screen__btn" href="#">Читать статью</a>
      </div>
      <img src="/img/Napoleon-2.jpg" class="full-screen__video" />
    </div>
  </section>
  <section class="section dark-gray-bg timeline">
    <div class="timeline__container">
      <div
        class="timeline__box box-timeline"
        v-for="item in data.items"
        :key="item"
      >
        <div class="timeline-circle"></div>
        <div class="timeline__content">
          <h3 class="box-timeline__title">{{ item.name }}</h3>
          <div class="box-timeline__text">{{ item.year }}</div>
          <button @click="modalOpen(), receiveData(item)">Узнать больше</button>
          <span class="arrow"></span>
        </div>
      </div>
    </div>
  </section>
  <div v-if="getData()">
    <BaseModal
      v-show="showModal"
      @opening-request="modalOpen"
      :title="getData().name"
      :description="getData().description"
      :images="getData().images"
    >
    </BaseModal>
  </div>
</template>
<script setup>
import BaseModal from "../components/BaseModal.vue";

import { ref, reactive } from "vue";

import items from "../data/data.json";

const data = ref();
data.value = items;

const state = reactive({
  data: null,
});

const showModal = ref(false);

const modalOpen = (item) => {
  showModal.value = !showModal.value;
  let body = document.getElementsByTagName("body")[0];
  body.classList.toggle("lock");
};

const receiveData = (item) => {
  state.data = item;
};

const getData = () => {
  return state.data;
};
</script>
<style scoped>
.timeline {
  position: relative;
  z-index: 3;
  padding-top: 60px;
}

.timeline:after {
  content: "";
  position: absolute;
  width: 6px;
  height: 100%;
  background-color: var(--white-color);
  top: 0;
  left: 50%;
  margin-left: -3px;
  z-index: -1;
  animation: moveline 6s linear forwards;
}

@keyframes moveline {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

.timeline__box {
  position: relative;
}

.box-timeline {
  padding: 10px 50px;
  position: relative;
  width: 50%;
  animation: movedown 1s linear forwards;
  opacity: 0;
}

@keyframes movedown {
  0% {
    opacity: 1;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.box-timeline:nth-child(even) {
  left: 50%;
}
.box-timeline:nth-child(odd) {
  left: 0;
}

.timeline__content {
  background-color: var(--white-color);
  position: relative;
  padding: 20px 30px;
  border-radius: 6px;
}

.timeline-circle {
  position: absolute;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  background: var(--white-color);
  right: -20px;
  top: 32px;
  z-index: 10;
}

.box-timeline:nth-child(even) .timeline-circle {
  left: -20px;
}
.arrow {
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.box-timeline:nth-child(odd) .arrow {
  right: -15px;
  border-left: 15px solid var(--white-color);
}
.box-timeline:nth-child(even) .arrow {
  left: -15px;
  border-right: 15px solid var(--white-color);
}
</style>
