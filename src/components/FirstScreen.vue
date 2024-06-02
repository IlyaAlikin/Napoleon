<template>
  <div class="full-screen">
    <div class="full-screen__body">
      <h1 class="full-screen__title">
        Наполеоновские кампании:
        <p>
          <span class="blue">сражения, </span>
          <span>победы,</span> <span class="red">поражения</span>
        </p>
      </h1>
      <div class="full-screen__content">
        <p class="full-screen__text">
          Погрузитесь в историю великих наполеоновских кампаний и захватывающие
          моменты войн, переписавших карту Европы. Почувствуйте азарт великого
          завоевателя! Начните свое историческое путешествие прямо сейчас.
        </p>
        <RouterLink to="/biography">
          <button class="full-screen__btn" href="#">Узнать больше</button>
        </RouterLink>
      </div>
      <video muted autoplay loop class="full-screen__video">
        <source type="video/mp4" src="/video/main.mp4" />
      </video>
    </div>
  </div>
</template>
<script setup></script>
