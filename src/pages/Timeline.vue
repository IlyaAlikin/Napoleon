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
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import BiographySlide from "../components/BiographySlide.vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
</script>
<style scoped></style>
