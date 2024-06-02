<template>
  <section class="full-screen">
    <div class="full-screen__body">
      <h1 class="full-screen__title">Биография</h1>
      <div class="full-screen__content">
        <p class="full-screen__text">
          "Погрузитесь в жизнь и величие Наполеона Бонапарта. Исследуйте его
          удивительный путь от обычного юноши до великого императора Франции.
          Добро пожаловать в увлекательное путешествие через эпоху Наполеона."
        </p>
        <a class="full-screen__btn" href="#">Читать статью</a>
      </div>
      <img src="/img/Young.jpg" class="full-screen__video biography__img" />
    </div>
  </section>
  <section class="section dark-gray-bg biography">
    <div class="section__container">
      <div class="section__block block-brief">
        <div class="section__text">
          <div class="biography__top">
            <h2 class="section__title white">Моя биография</h2>
            <button class="section__volume" @click="playAudio()">
              <font-awesome-icon :icon="['fas', 'volume-off']" />
            </button>
          </div>
          <div class="section__wrapper">
            <p class="section__paragraph white">
              Я Наполеон первый Бонапарт, рожденный пятнадцатого августа, одна
              тысяча шестьдесят девятого года. Император, великий полководец и
              государственный деятель, заложивший основы современного
              французского государства. Волею случая в октябре одна тысяча
              девяносто пятого года я помог Французской директории Баррасу
              подавить восстание роялистов, после чего был назначен командовать
              армией на Апеннинском полуострове – Италии. Одержав ряд
              блистательных побед в Италии в конце восемнадцатого века, я
              заключил выгодный для Франции мир с австрийцами.
            </p>
            <div class="section__img biography__img">
              <img src="/img/Napoleon-3.jpg" alt="" />
              <p class="img-section-descripton">Наполеон в Альпах</p>
            </div>
            <p class="section__paragraph white">
              После чего я бросил свой взгляд на юг – на Египет. Неожиданно, во
              время похода в Египет обострилась внутриполитическая борьба в
              директории. Я поспешил во францию, оставив свою армию в Египте и
              опираясь на нее, стал во главе триумвирата консулов вместе с
              Сийесом и Рожером Дюко.
            </p>
            <div class="section__img biography__img">
              <img src="/img/Egypt.jpg" alt="" />
              <p class="img-section-descripton">Наполеон в Египте</p>
            </div>
            <p class="section__paragraph white">
              Утвердив Конституцию, я стал первым консулом, а в начале
              девятнадцатого века я провозгласил себя императором французской
              империи. В то же время я одержал ряд побед над австрийскими,
              прусскими и российскими войсками в Европе и достиг вершины своего
              могущества. К сожалению, мои многочисленные военные кампании не
              остались без следа для экономики Франции и в тысяча восемьсот
              двенадцатом году привели к краху стратегии завоевания мною
              мирового господства. Весной восемьсот четырнадцатого г. армии
              противника вступили в Париж, и я принужден был отречься от
              престола и отправиться в изгнание на остров Эльбу.
            </p>
            <div class="section__img biography__img">
              <img src="/img/Crowned.jpeg" alt="" />
              <p class="img-section-descripton">
                Коронация Наполеона императором Франции
              </p>
            </div>
            <p class="section__paragraph white">
              Но население и армия не забыли меня! При их поддержке я смог снова
              воцариться на троне в Париже. Мои «Сто дней» закончились
              поражением в июне пятнадцатого года от войск Пруссии и
              Великобритании в битве при Ватерлоо. К сожалению, это было концом,
              концом всего. Я был безнадежно сослан на Остров святой Елены, где
              занимался незаурядными делами, такими как садоводство, прогулки и
              написание мемуаров. Так и закончилась моя история и история моей
              первой Французской империи, давшей основу государственности моим
              потомкам!
            </p>
            <div class="section__img biography__img">
              <img src="/img/Nothing.jpg" alt="" />
              <p class="img-section-descripton">There's nothing we can do</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import BiographySlide from "../components/BiographySlide.vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const rusAudio = new Audio("/audio/rusNapoleon.mp3");
const playAudio = () => {
  rusAudio.play();
};

const modules = [Pagination];
onUnmounted(() => {
  rusAudio.pause();
  rusAudio.currentTime = 0;
});
</script>
<style scoped></style>
