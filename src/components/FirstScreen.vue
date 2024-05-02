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
        <a class="full-screen__btn" href="#">Узнать больше</a>
      </div>
      <video muted autoplay loop class="full-screen__video">
        <source type="video/mp4" src="/video/main.mp4" />
      </video>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.full-screen {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.full-screen__body {
  position: relative;
  z-index: 2;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.full-screen__title {
  color: var(--white-color);
  font-size: clamp(32px, 6vw, 84px);
  position: relative;
  z-index: 4;
  max-width: 1250px;
  text-align: center;
}

.full-screen__content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 750px;
}
.full-screen__content::after {
  content: "";
  width: 100%;
  height: 100vh;
  z-index: 2;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}

.full-screen__text {
  font-size: clamp(18px, 3vw, 28px);
  color: var(--white-color);
  margin-bottom: 30px;
  position: relative;
  z-index: 4;
}
.full-screen__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.full-screen__btn {
  display: inline-block;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  padding: 10px 30px;
  border-radius: 10px;
  font-size: clamp(16px, 3vw, 26px);
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  z-index: 4;
}
.full-screen__btn:hover {
  background-color: var(--white-color);
  color: var(--blue-color);
}
.blue {
  color: var(--blue-color);
}
.red {
  color: var(--red-color);
}
@media (max-width: 568px) {
  .full-screen__title span {
    font-size: clamp(21px, 6vw, 84px);
  }
}
</style>
