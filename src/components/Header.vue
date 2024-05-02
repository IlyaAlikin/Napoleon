<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo">Napoleon</div>
        <nav class="header__nav">
          <ul class="header__list list-header" id="list">
            <li class="list-header">Биография</li>
            <li class="list-header">Линия времени</li>
            <li class="list-header">Интерактивная карта</li>
          </ul>
        </nav>
        <div class="header__controls">
          <button class="language-button">Ru</button>
          <button class="language-button">En</button>
        </div>
        <button @click="toggleMenu()" id="burger" class="header__burger">
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
function toggleMenu() {
  const burger = document.getElementById("burger");
  const list = document.getElementById("list");
  burger.classList.toggle("active");
  list.classList.toggle("active");
}
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 4;
  background: rgba(256, 256, 256, 0.3);
}

.header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;

  width: 100%;
  height: 2px;
  background-color: var(--white-color);
}

.header__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  height: 100%;
}
.header__container {
  height: inherit;
}
.header__nav {
  flex: 0 1 820px;
}
.header__logo {
  font-size: 24px;
  color: var(--white-color);
  cursor: pointer;
}
.header__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.list-header {
  color: var(--white-color);
  font-size: clamp(16px, 2.5vw, 24px);
}
.header__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.language-button {
  font-size: clamp(16px, 2.5vw, 24px);
  font-family: "Lora", serif;
  color: var(--white-color);
  cursor: pointer;
}
.header__burger {
  display: none;
}
@media (max-width: 992px) {
  .header {
    height: 70px;
  }
  .header__burger {
    display: block;
    min-width: 28px;
    height: 22px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .header__burger.active {
    transform: translateY(3px);
  }
  .header__burger::after {
    content: "";
    height: 100%;
    width: 3px;
    background-color: var(--red-color);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.3s ease;
  }
  .header__burger.active::after {
    transform: rotate(-45deg);
    background: var(--white-color);
    height: 120%;
    right: 14px;
    top: -4px;
  }
  .header__burger::before {
    content: "";
    height: 100%;
    width: 3px;
    background-color: var(--blue-color);
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
  }
  .header__burger.active::before {
    transform: rotate(45deg);
    background: var(--white-color);
    height: 120%;
    left: 10px;
    top: -4px;
  }
  .header__burger span {
    height: 100%;
    width: 3px;
    background-color: var(--white-color);
    display: block;
    position: absolute;
    top: 0px;
    right: 13.5px;
    transition: all 0.3s ease;
  }
  .header__burger.active span {
    transform: scale(0);
  }
  .header__container {
    position: relative;
  }
  .header__list {
    position: fixed;
    width: 100%;
    height: 70px;
    top: -70px;
    left: 0;
    padding: 0px 15px;
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
  }
  .header__list.active {
    top: 70px;
    background-color: rgba(256, 256, 256, 0.3);
    opacity: 1;
    visibility: visible;
  }
  .header__body {
    position: relative;
  }
}
@media (max-width: 420px) {
  .header__list {
    flex-direction: column;
    padding: 10px;
    height: 100px;
  }
  .header__body {
    gap: 0px;
  }
  .header__controls {
    padding-right: 20px;
  }
}
</style>
