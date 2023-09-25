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

function updateCounter() {
  const days = document.querySelector("._timer");

  const nextDate = new Date(`Oct 01 ${currentYear} 00:00:00`);
  const currentTime = new Date();
  const difference = nextDate - currentTime;

  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  days.innerHTML = `${daysLeft < 10 ? "0" + daysLeft : daysLeft}`;
}
updateCounter();

function updateCounter1() {
  const days1 = document.querySelector("._timer1");

  const nextDate1 = new Date(`Oct 25 ${currentYear} 00:00:00`);
  const currentTime = new Date();
  const difference1 = nextDate1 - currentTime;

  const daysLeft1 = Math.floor(difference1 / 1000 / 60 / 60 / 24);
  days1.innerHTML = `${daysLeft1 < 10 ? "0" + daysLeft1 : daysLeft1}`;
}
updateCounter1();

function updateCounter2() {
  const days2 = document.querySelector("._timer2");

  const nextDate2 = new Date(`Jan 25 2024 00:00:00`);
  const currentTime = new Date();
  const difference2 = nextDate2 - currentTime;

  const daysLeft2 = Math.floor(difference2 / 1000 / 60 / 60 / 24);
  days2.innerHTML = `${daysLeft2 < 10 ? "0" + daysLeft2 : daysLeft2}`;
}
updateCounter2();

function updateCounter3() {
  const days3 = document.querySelector("._timer3");

  const nextDate3 = new Date(`Jan 25 2024 00:00:00`);
  const currentTime = new Date();
  const difference3 = nextDate3 - currentTime;

  const daysLeft3 = Math.floor(difference3 / 1000 / 60 / 60 / 24);
  days3.innerHTML = `${daysLeft3 < 10 ? "0" + daysLeft3 : daysLeft3}`;
}
updateCounter3();

function updateCounter4() {
  const days4 = document.querySelector("._timer4");

  const nextDate4 = new Date(`Aug 04 2025 00:00:00`);
  const currentTime = new Date();
  const difference4 = nextDate4 - currentTime;

  const daysLeft4 = Math.floor(difference4 / 1000 / 60 / 60 / 24);
  days4.innerHTML = `${daysLeft4 < 10 ? "0" + daysLeft4 : daysLeft4}`;
}
updateCounter4();

function updateCounter5() {
  const days5 = document.querySelector("._timer5");

  const nextDate5 = new Date(`Jul 04 2024 00:00:00`);
  const currentTime = new Date();
  const difference5 = nextDate5 - currentTime;

  const daysLeft5 = Math.floor(difference5 / 1000 / 60 / 60 / 24);
  days5.innerHTML = `${daysLeft5 < 10 ? "0" + daysLeft5 : daysLeft5}`;
}
updateCounter5();

function updateCounter6() {
  const days6 = document.querySelector("._timer6");

  const nextDate6 = new Date(`Dec 31 2024 00:00:00`);
  const currentTime = new Date();
  const difference6 = nextDate6 - currentTime;

  const daysLeft6 = Math.floor(difference6 / 1000 / 60 / 60 / 24);
  days6.innerHTML = `${daysLeft6 < 10 ? "0" + daysLeft6 : daysLeft6}`;
}
updateCounter6();

function updateCounter7() {
  const days7 = document.querySelector("._timer7");

  const nextDate7 = new Date(`Sep 25 2025 00:00:00`);
  const currentTime = new Date();
  const difference7 = nextDate7 - currentTime;

  const daysLeft7 = Math.floor(difference7 / 1000 / 60 / 60 / 24);
  days7.innerHTML = `${daysLeft7 < 10 ? "0" + daysLeft7 : daysLeft7}`;
}
updateCounter7();

function updateCounter8() {
  const days8 = document.querySelector("._timer8");

  const nextDate8 = new Date(`Jun 25 2025 00:00:00`);
  const currentTime = new Date();
  const difference8 = nextDate8 - currentTime;

  const daysLeft8 = Math.floor(difference8 / 1000 / 60 / 60 / 24);
  days8.innerHTML = `${daysLeft8 < 10 ? "0" + daysLeft8 : daysLeft8}`;
}
updateCounter8();
8;
