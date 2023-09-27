// const menuButton = document.querySelector(".header__burger");
// const menuButton1 = document.querySelector(".header__menu");
// const contentBody = document.querySelector("body");

// menuButton.onclick = function () {
//   menuButton.classList.toggle("active");
//   menuButton1.classList.toggle("active");
//   contentBody.classList.toggle("lock");
// }
// menuButton1.onclick = function () {
//   menuButton.classList.remove("active");
//   menuButton1.classList.remove("active");
//   contentBody.classList.remove("lock");
// }

// document.querySelector('#tab').addEventListener('click', setScrollIntoView);

// function setScrollIntoView(false) {
//   const blockSelected = document.querySelector('#tab');
//   blockSelected.scrollIntoView({
//     block: "end",
//     inline: "auto",
//     behavior: "smooth",
//   });
// }

"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Ореra Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile|Edge/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

const currentYear = new Date().getFullYear();
console.log(currentYear);
const currentTime = new Date();

function updateCounter() {
  const days = document.querySelector("._timer");
  const nextDate = new Date(`May 18 2024 00:00:00`);
  const difference = nextDate - currentTime;
  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  days.innerHTML = `${daysLeft < 10 ? "0" + daysLeft : daysLeft}`;
}
updateCounter();

function updateCounter1() {
  const days1 = document.querySelector("._timer1");
  const nextDate1 = new Date(`Oct 25 ${currentYear} 00:00:00`);
  const difference1 = nextDate1 - currentTime;
  const daysLeft1 = Math.floor(difference1 / 1000 / 60 / 60 / 24);
  days1.innerHTML = `${daysLeft1 < 10 ? "0" + daysLeft1 : daysLeft1}`;
}
updateCounter1();

function updateCounter2() {
  const days2 = document.querySelector("._timer2");
  const nextDate2 = new Date(`Jan 25 2024 00:00:00`);
  const difference2 = nextDate2 - currentTime;
  const daysLeft2 = Math.floor(difference2 / 1000 / 60 / 60 / 24);
  days2.innerHTML = `${daysLeft2 < 10 ? "0" + daysLeft2 : daysLeft2}`;
}
updateCounter2();

function updateCounter3() {
  const days3 = document.querySelector("._timer3");
  const nextDate3 = new Date(`Aug 03 2024 00:00:00`);
  console.log(nextDate3);
  const difference3 = nextDate3 - currentTime;
  const daysLeft3 = Math.floor(difference3 / 1000 / 60 / 60 / 24);
  days3.innerHTML = `${daysLeft3 < 10 ? "0" + daysLeft3 : daysLeft3}`;
}
updateCounter3();

function updateCounter4() {
  const days4 = document.querySelector("._timer4");
  const nextDate4 = new Date(`Aug 24 2024 00:00:00`);
  const difference4 = nextDate4 - currentTime;
  const daysLeft4 = Math.floor(difference4 / 1000 / 60 / 60 / 24);
  days4.innerHTML = `${daysLeft4 < 10 ? "0" + daysLeft4 : daysLeft4}`;
}
updateCounter4();

function updateCounter5() {
  const days5 = document.querySelector("._timer5");
  const nextDate5 = new Date(`Nov 01 2023 00:00:00`);
  const difference5 = nextDate5 - currentTime;
  const daysLeft5 = Math.floor(difference5 / 1000 / 60 / 60 / 24);
  days5.innerHTML = `${daysLeft5 < 10 ? "0" + daysLeft5 : daysLeft5}`;
}
updateCounter5();

function updateCounter6() {
  const days6 = document.querySelector("._timer6");
  const nextDate6 = new Date(`Jun 30 2024 00:00:00`);
  const difference6 = nextDate6 - currentTime;
  const daysLeft6 = Math.floor(difference6 / 1000 / 60 / 60 / 24);
  days6.innerHTML = `${daysLeft6 < 10 ? "0" + daysLeft6 : daysLeft6}`;
}
updateCounter6();

function updateCounter7() {
  const days7 = document.querySelector("._timer7");
  const nextDate7 = new Date(`Sep 25 2024 00:00:00`);
  const difference7 = nextDate7 - currentTime;
  const daysLeft7 = Math.floor(difference7 / 1000 / 60 / 60 / 24);
  days7.innerHTML = `${daysLeft7 < 10 ? "0" + daysLeft7 : daysLeft7}`;
}
updateCounter7();

function updateCounter8() {
  const days8 = document.querySelector("._timer8");
  const nextDate8 = new Date(`Jun 25 2024 00:00:00`);
  const difference8 = nextDate8 - currentTime;
  const daysLeft8 = Math.floor(difference8 / 1000 / 60 / 60 / 24);
  days8.innerHTML = `${daysLeft8 < 10 ? "0" + daysLeft8 : daysLeft8}`;
}
updateCounter8();

function updateCounter9() {
  const days9 = document.querySelector("._timer9");
  const nextDate9 = new Date(`Aug 24 2024 00:00:00`);
  const difference9 = nextDate9 - currentTime;
  const daysLeft9 = Math.floor(difference9 / 1000 / 60 / 60 / 24);
  days9.innerHTML = `${daysLeft9 < 10 ? "0" + daysLeft9 : daysLeft9}`;
}
updateCounter9();

function updateCounter10() {
  const days10 = document.querySelector("._timer10");
  const nextDate10 = new Date(`Aug 03 2024 00:00:00`);
  const difference10 = nextDate10 - currentTime;
  const daysLeft10 = Math.floor(difference10 / 1000 / 60 / 60 / 24);
  days10.innerHTML = `${daysLeft10 < 10 ? "0" + daysLeft10 : daysLeft10}`;
}
updateCounter10();

function updateCounter11() {
  const days11 = document.querySelector("._timer11");
  const nextDate11 = new Date(`Aug 03 2024 00:00:00`);
  const difference11 = nextDate11 - currentTime;
  const daysLeft11 = Math.floor(difference11 / 1000 / 60 / 60 / 24);
  days11.innerHTML = `${daysLeft11 < 10 ? "0" + daysLeft11 : daysLeft11}`;
}
updateCounter11();

function updateCounter12() {
  const days12 = document.querySelector("._timer12");
  const nextDate12 = new Date(`Aug 24 2024 00:00:00`);
  const difference12 = nextDate12 - currentTime;
  const daysLeft12 = Math.floor(difference12 / 1000 / 60 / 60 / 24);
  days12.innerHTML = `${daysLeft12 < 10 ? "0" + daysLeft12 : daysLeft12}`;
}
updateCounter12();

function updateCounter13() {
  const days13 = document.querySelector("._timer13");
  const nextDate13 = new Date(`Aug 03 2024 00:00:00`);
  const difference13 = nextDate13 - currentTime;
  const daysLeft13 = Math.floor(difference13 / 1000 / 60 / 60 / 24);
  days13.innerHTML = `${daysLeft13 < 10 ? "0" + daysLeft13 : daysLeft13}`;
}
updateCounter13();

function updateCounter14() {
  const days14 = document.querySelector("._timer14");
  const nextDate14 = new Date(`Aug 03 2024 00:00:00`);
  const difference14 = nextDate14 - currentTime;
  const daysLeft14 = Math.floor(difference14 / 1000 / 60 / 60 / 24);
  days14.innerHTML = `${daysLeft14 < 10 ? "0" + daysLeft14 : daysLeft14}`;
}
updateCounter14();

function updateCounter15() {
  const days15 = document.querySelector("._timer15");
  const nextDate15 = new Date(`Aug 03 2024 00:00:00`);
  const difference15 = nextDate15 - currentTime;
  const daysLeft15 = Math.floor(difference15 / 1000 / 60 / 60 / 24);
  days15.innerHTML = `${daysLeft15 < 10 ? "0" + daysLeft15 : daysLeft15}`;
}
updateCounter15();

function updateCounter16() {
  const days16 = document.querySelector("._timer16");
  const nextDate16 = new Date(`Jul 01 2024 00:00:00`);
  const difference16 = nextDate16 - currentTime;
  const daysLeft16 = Math.floor(difference16 / 1000 / 60 / 60 / 24);
  days16.innerHTML = `${daysLeft16 < 10 ? "0" + daysLeft16 : daysLeft16}`;
}
updateCounter16();

function updateCounter17() {
  const days17 = document.querySelector("._timer17");
  const nextDate17 = new Date(`Jul 01 2024 00:00:00`);
  const difference17 = nextDate17 - currentTime;
  const daysLeft17 = Math.floor(difference17 / 1000 / 60 / 60 / 24);
  days17.innerHTML = `${daysLeft17 < 10 ? "0" + daysLeft17 : daysLeft17}`;
}
updateCounter17();

function updateCounter18() {
  const days18 = document.querySelector("._timer18");
  const nextDate18 = new Date(`Aug 03 2024 00:00:00`);
  const difference18 = nextDate18 - currentTime;
  const daysLeft18 = Math.floor(difference18 / 1000 / 60 / 60 / 24);
  days18.innerHTML = `${daysLeft18 < 10 ? "0" + daysLeft18 : daysLeft18}`;
}
updateCounter18();
