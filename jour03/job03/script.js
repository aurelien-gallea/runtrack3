let pos = [1, 2, 3, 4, 5, 6, 7, 8]; // position de nos images

let randomPos = randomize(pos); // on mélange le tableau existant et on met son contenue dans un autre
function randomize(tab) {
  var i, j, tmp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
  }
  return tab;
}
console.log(randomPos);
// on place tout sur la tableau de jeu aléatoirement
$(`.1`).append($(`#img${randomPos[0]}`));
$(`.2`).append($(`#img${randomPos[1]}`));
$(`.3`).append($(`#img${randomPos[2]}`));
$(`.4`).append($(`#img${randomPos[3]}`));
$(`.5`).append($(`#img${randomPos[4]}`));
$(`.6`).append($(`#img${randomPos[5]}`));
$(`.7`).append($(`#img${randomPos[6]}`));
$(`.8`).append($(`#img${randomPos[7]}`));
// $("#box").append($(`.9`)).append($('#img9'));

function checkMove() {
  let empty = 9;
  // div9  --------------------------------
  $(".6").click(() => {
    if (empty == 9 && empty != 6) {
      $(".9").append($(`#img${randomPos[5]}`));
      // $(".6").toggleClass("empty");
      return empty = 6;
    }
  });

  $(".8").click(() => {
    if (empty == 9 && empty !=8) {
      $(".9").append($(`#img${randomPos[7]}`));
      return empty = 8;
    }
  });
  // div8 ----------------------------------
  $(".5").click(() => {
    if (empty == 8) {
      $(".8").append($(`#img${randomPos[4]}`));
      return empty = 5;
    }
  });
  $(".7").click(() => {
    if (empty == 8) {
      $(".8").append($(`#img${randomPos[6]}`));
      return empty = 7;
    }
  });
  $(".9").click(() => {
    if (empty == 8) {
      $(".8").append($(`#img${randomPos[8]}`));
      return empty = 9;
    }
  });
  // div7 ----------------------------------
  $(".8").click(() => {
    if (empty == 7 && empty !=8) {
      $(".7").append($(`#img${randomPos[7]}`));
      return empty = 8;
    }
  });
  $(".4").click(() => {
    console.log($('.8'));
    if (empty == 7) {
      $(".7").append($(`#img${randomPos[3]}`));
      return empty = 4;
    }
  });
  // div6 ---------------------------------
  $(".3").click(() => {
    if (empty == 6) {
      $(".6").append($(`#img${randomPos[2]}`));
      return empty = 3;
    }
  });
  $(".5").click(() => {
    if (empty == 6) {
      $(".6").append($(`#img${randomPos[4]}`));
      return empty = 5;
    }
  });
  $(".9").click(() => {
    if (empty == 6) {
      $(".6").append($(`#img${randomPos[8]}`));
      return empty = 9;
    }
  });
  // div5 -------------------------------
  $(".2").click(() => {
    if (empty == 5) {
      $(".5").append($(`#img${randomPos[1]}`));
      return empty = 2;
    }
  });
  $(".4").click(() => {
    if (empty == 5) {
      $(".5").append($(`#img${randomPos[3]}`));
      return empty = 4;
    }
  });
  $(".6").click(() => {
    if (empty == 5 && empty != 6) {
      $(".5").append($(`#img${randomPos[5]}`));
      $(".6").toggleClass("empty");
      return empty = 6;
    }
  });
  $(".8").click(() => {
    if (empty == 5 && empty !=8) {
      $(".5").append($(`#img${randomPos[7]}`));
      return empty = 8;
    }
  });
  // div4---------------------------------1/5/7
  $(".1").click(() => {
    if (empty == 4) {
      $(".4").append($(`#img${randomPos[0]}`));
      return empty = 1;
    }
  });
  $(".5").click(() => {
    if (empty == 4) {
      $(".4").append($(`#img${randomPos[4]}`));
      return empty = 5;
    }
  });
  $(".7").click(() => {
    if (empty == 4) {
      $(".4").append($(`#img${randomPos[6]}`));
      return empty = 7;
    }
  });
  // div3-------------------------------2/6
  $(".2").click(() => {
    if (empty == 3) {
      $(".3").append($(`#img${randomPos[1]}`));
      return empty = 2;
    }
  });
  $(".6").click(() => {
    if (empty == 3 && empty != 6) {
      $(".3").append($(`#img${randomPos[5]}`));
      $(".6").toggleClass("empty");
      return empty = 6;
    }
  });
  // div2-----------------------------1/3/5
  $(".1").click(() => {
    if (empty == 2) {
      $(".2").append($(`#img${randomPos[0]}`));
      return empty = 1;
    }
  });
  $(".3").click(() => {
    if (empty == 2) {
      $(".2").append($(`#img${randomPos[2]}`));
      return empty = 3;
    }
  });
  $(".5").click(() => {
    if (empty == 2) {
      $(".2").append($(`#img${randomPos[4]}`));
      return empty = 5;
    }
  });
  // div1 ------------------------------2/4
  $(".2").click(() => {
    if (empty == 1) {
      $(".1").append($(`#img${randomPos[1]}`));
      return empty = 2;
    }
  });
  $(".4").click(() => {
    if (empty == 1) {
      $(".1").append($(`#img${randomPos[3]}`));
      return empty = 4;
    }
  });
}
checkMove();



