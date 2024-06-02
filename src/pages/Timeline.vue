<template>
  <section class="full-screen">
    <div class="full-screen__body">
      <h1 class="full-screen__title">Таймлайн</h1>
      <div class="full-screen__content">
        <p class="full-screen__text">
          Сдесь собраны все важнейшие события в жизни Наполеона Бонапарта I в
          хронологическом порядке
        </p>
        <a class="full-screen__btn" href="#timeline">Читать статью</a>
      </div>
      <img src="/img/Time.jpg" class="full-screen__video" />
    </div>
  </section>
  <section class="section dark-gray-bg timeline" id="timeline">
    <div class="timeline__container">
      <div
        class="timeline__box box-timeline"
        v-for="item in data.items"
        :key="item"
      >
        <div class="timeline-circle"></div>
        <div class="timeline__content">
          <h3 class="box-timeline__title">{{ item.name }}</h3>
          <div class="box-timeline__year">{{ item.year }}</div>
          <button
            @click="modalOpen(), receiveData(item)"
            class="box-timeline__btn"
          >
            Узнать больше
          </button>
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
      :audio="getData().audio"
    >
    </BaseModal>
  </div>
</template>
<script setup>
import BaseModal from "../components/BaseModal.vue";

import { ref, reactive } from "vue";

const items = {
  items: [
    {
      id: 1,
      name: "Битва при Маренго",
      year: 1800,
      description:
        "Битва при Маренго произошла в тысяча восемьсотом году, где мой корпус столкнулся с армией австрийского генерала Меласа. На полях Маренго, узких и покрытых пылью, мы вели ожесточенный бой. Французские гренадеры сражались плечом к плечу, пока огонь не сделал их кровавыми тенями на поле битвы. Артиллерия раскатывала свои ужасающие громовые песни, разрывая ряды противника. Несмотря на численное превосходство австрийцев, наши войска блестяще использовали тактику маневра и контратаки. Под моим руководством наши отряды разрушили линию противника, вынуждая их отступить. Битва при Маренго стала вехой в истории военного искусства, подтверждением моей неоспоримой гениальности в тактике и стратегии.",
      images: [
        "./img/Marengo-1.jpg",
        "./img/Marengo-2.jpg",
        "./img/Marengo-3.jpg",
      ],
      audio: "./audio/Morengo.mp3",
    },
    {
      id: 2,
      name: "Трафальгарское сражение",
      year: 1805,
      description:
        "Я вспоминаю Трафальгарское сражение с жалостью в сердце. Это был 1805 год, когда моя великая армия столкнулась с флотом адмирала Нельсона. Туманным утром, под голубым небом, французские и испанские корабли вступили в смертельный танец с английским флотом. Шум морского прибоя смешивался с ревом орудий, а паруса трещали под ударами ветра и ядер.Адмирал Нельсон, хитрый и опытный воин, расположил свои суда в стройную линию, умело используя ветер и огонь. Несмотря на мужество и отвагу моих моряков, численное превосходство англичан и их ловкие тактические ходы принесли им победу. Многие наши корабли были поверженыНесмотря на этот удар, великая Франция продолжила свой путь к величию. Это сражение стало напоминанием о том, что путь к победе часто тернист и требует постоянной борьбы ",
      images: ["./img/Trafalgar-2.jpg", "./img/Trafalgar-3.jpg"],
      audio: "./audio/Trafalgar.mp3",
    },
    {
      id: 3,
      name: "Битва прии Аустерлице",
      year: 1805,
      description:
        "Я вспоминаю о великом триумфе при Аустерлице в тысяча восемьсот пятом году. Это была битва, где моя армия, уверенная и сильная, встретилась лицом к лицу с русско-австрийским союзом. Поля Аустерлица стали свидетелями великого столкновения, где линии моих войск хорошо организованно противостояли силам коалиции.Русские и австрийцы, пытаясь разбить мои ряды, атаковали с неослабевающей яростью, однако благодаря моей стратегии и тактике, мы смогли выиграть этот эпический бой. Маневренность моей армии была ключом к победе: я использовал хитроумные тактические ходы, чтобы обмануть врага и укрепить свои позиции.Несмотря на численное превосходство коалиции, мои войска демонстрировали выдающиеся боевые навыки и несгибаемую решимость.Битва под Аустерлицем стала ярким свидетельством моего военного гения и неоспоримого лидерства.       ",
      images: ["./img/Austerlitz-1.jpg", "./img/Austerlitz-2.png"],
      audio: "./audio/Austerlitz.mp3",
    },
    {
      id: 4,
      name: "Битва при Йене",
      year: 1806,
      description:
        "Говоря о великой победе в битве при Йене и Ауэрштедте в тысяча восемьсот шестом году. Мои войска Франции столкнулись с прусско-саксонским союзом, решившим остановить мой поход на Восток. На полях Йены и Ауэрштедте развернулась эпическая схватка, где моя армия проявила свою неоспоримую силу и тактическое мастерство.Противник, хотя и численно превосходил нас, был раздроблен и ошеломлен нашей стратегией. Мы умело использовали маневр и концентрированные удары, чтобы разгромить вражеские силы, а артиллерия наших батарей разрывала их ряды.Звуки боя, рев орудий, крики раненых — все это сливалось в одно громкое звучание победы. Моя армия демонстрировала не только свою силу, но и дисциплину и решимость в бою.Битва при Йене и Ауэрштедте стала еще одним великим подвигом французской армии под моим руководством, укрепившим мою позицию в Европе и утвердившим мое величие как военного лидера.",
      images: ["./img/Yenne-1.gif", "./img/Yenne-2.jpg", "./img/Yenne-3.png"],
      audio: "./audio/Yenne.mp3",
    },
    {
      id: 5,
      name: "Оккупация Испании",
      year: 1808,
      description:
        "Время пиренейских войн можно назвать очень сложным временем как для меня, так и для Франции, в которое моя армия столкнулась с испанскими и португальскими силами, а также с английскими войсками. Эти конфликты, развернувшиеся в начале девятнадцатого века, представляли собой серьезное испытание для моего военного гения и стратегического мышления.Ведя бои в гористых районах Пиренеев, мои войска столкнулись с сильным сопротивлением местного населения и регулярных войск. Хитроумные тактические ходы и маневры были необходимы, чтобы преодолеть сложный ландшафт и непрекращающееся сопротивление противника.Несмотря на трудности, мои войска проявили выдающиеся качества смелости, выносливости и преданности делу. Каждая битва в этих войнах была испытанием для меня и для моих солдат, но они доказали свою несгибаемую решимость и готовность бороться за нашу империю.",
      images: ["./img/Spain-1.jpg", "./img/Spain-2.jpg", "./img/Spain-3.jpg"],
      audio: "./audio/Spain.mp3",
    },
    {
      id: 6,
      name: "Битва при Лейпциге",
      year: 1814,
      description:
        "Масштабная Битва народов в Лейпциге в восемьсот тринадцатом году, где моя великая армия столкнулась с коалицией европейских сил. На полях Лейпцига, французы, русские, австрийцы и пруссаки сражались за будущее континента.Эта эпическая схватка была одной из крупнейших в истории, где сотни тысяч солдат вели ожесточенные бои на протяжении нескольких дней. Мои войска демонстрировали мужество и выносливость, но численное превосходство коалиции оказалось подавляющим.Смелые атаки противника и яростный ответ моих войск создали поток крови и страха на полях Лейпцига. Шум орудий и крики раненых наполняли воздух, а земля пропиталась горьким ароматом смерти.Хотя результат этой битвы был не в нашу пользу, она осталась в истории как символ нашего мужества и бесстрашия. Битва народов проложила путь к падению моей империи, но дух наших солдат остался непоколебимым.",
      images: [
        "./img/Leipcig-1.jpg",
        "./img/Leipcig-2.jpg",
        "./img/Leipcig-3.jpg",
      ],
      audio: "./audio/Laipzig.mp3",
    },
    {
      id: 7,
      name: "Бородинское сражение",
      year: 1812,
      description:
        "При Бородино случилась величественная битва! Произошла она седьмого сентября тысяча восемьсот двеннадцатого года. На бескрайних просторах России моя Великая армия столкнулась с русскими войсками под командованием генерала Кутузова. Это сражение было одним из самых кровопролитных в моей карьере и в истории войн.С раннего утра, в густом дыму от артиллерийского огня, наши войска двинулись вперед. Каждая позиция была оспорена, каждая высота стала ареной ожесточенных боев. Мои солдаты сражались с невероятной отвагой, штурмуя редуты и оборонительные линии русских.Особенно жестокими были бои за Багратионовы флеши и Раевский редут, где наши атаки встречали яростное сопротивление. Я лично руководил операцией, следя за ходом битвы с командного пункта.Несмотря на огромные потери с обеих сторон, битва закончилась тактически неопределенно.",
      images: ["./img/Borodino-1.jpg", "./img/Borodino-3.jpg"],
      audio: "./audio/Borodino.mp3",
    },
    {
      id: 8,
      name: "Битва при Ватерлоо",
      year: 1815,
      description:
        "Я вспоминаю о финальной схватке при Ватерлоо в тысяча восемьсот пятнадцатом году, где я столкнулся с англо-голландско-прусским союзом. На полях Ватерлоо в ливнях дождя и грохоте орудий развернулся последний акт моего великого пути.Мои войска, хотя и измученные многодневным маршем, все еще были готовы к сражению. Но противники, возобновившие свои силы после моего возвращения из изгнания, атаковали с неослабевающей яростью.Кавалерия, пехота, артиллерия — все силы были брошены в бой. Я лично возглавлял атаки, но даже мой гений и решимость не смогли переломить ход событий.Несмотря на героизм моих солдат, численное превосходство противника оказалось подавляющим. Поля Ватерлоо стали свидетельницей моего поражения и окончания моего великого правления.Битва при Ватерлоо осталась в истории как символ конца эпохи, но даже в поражении я горжусь мужеством и преданностью моих солдат, которые боролись до последнего вздоха за идеалы империи.",
      images: [
        "./img/Vaterloo-1.jpg",
        "./img/Vaterloo-2.jpg",
        "./img/Vaterloo-3.jpg",
        "./img/Vaterloo-4.jpg",
        "./img/Vaterloo-5.jpg",
        "./img/Vaterloo-6.jpg",
      ],
      audio: "./audio/Waterloo.mp3",
    },
  ],
};

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
  console.log(state.data);
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
  display: flex;
  flex-direction: column;
  gap: 5px;
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
.box-timeline__title {
  font-size: clamp(18px, 2vw, 22px);
}
.box-timeline__btn {
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  font-family: "Lora", serif;
  display: inline-block;
  border: none;
  max-width: 300px;
  background: var(--gold-color);
  color: var(--white-color);
}

.box-timeline__year {
  color: var(--gold-color);
  font-size: 24px;
}

@media (max-width: 992px) {
  .timeline__content {
    padding: 15px 25px;
  }
}
@media (max-width: 768px) {
  .timeline:after {
    left: 90%;
  }
  .box-timeline[data-v-c770f8bb]:nth-child(odd),
  .box-timeline[data-v-c770f8bb]:nth-child(even) {
    left: 0;
  }

  .box-timeline:nth-child(even) .timeline-circle {
    right: -20px;
    left: auto;
  }

  .box-timeline {
    width: 91.8%;
  }
  .box-timeline:nth-child(even) .arrow {
    right: -15px;
    left: auto;
    border-right: 15px solid var(--white-color);
    border-left: 15px solid var(--white-color);
  }
  .box-timeline:nth-child(even) .arrow {
    border-right: none;
    border-left: 15px solid var(--white-color);
  }
}

@media (max-width: 578px) {
  .box-timeline {
    padding: 10px 30px;
  }
  .timeline-circle {
    width: 30px;
    height: 30px;
  }
  .box-timeline {
    padding: 10px 30px 10px 0px;
  }
}
</style>
