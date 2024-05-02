<template>
  <div class="full-screen">
    <div class="full-screen__body">
      <h1 class="full-screen__title">
        Наполеоновские кампании: <span class="blue">сражения, </span>
        <span>победы,</span> <span class="red">поражения</span>
      </h1>
      <div class="full-screen__content">
        <p class="full-screen__text">
          Immerse yourself in the history of the great Napoleonic campaigns and
          the exciting moments of the wars that rewrote the map of Europe. Feel
          the excitement of a great conqueror! Start your historical journey
          now.
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
  font-size: 84px;
  position: relative;
  z-index: 3;
  max-width: 1250px;
  text-align: center;
}
.full-screen__content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 750px;
}

.full-screen__text {
  font-size: 28px;
  color: var(--white-color);
  margin-bottom: 30px;
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
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.4s ease;
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
</style>
