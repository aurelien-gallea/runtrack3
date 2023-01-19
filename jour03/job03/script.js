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
$("#box").append($(`.1`).append($(`#img${randomPos[0]}`)));
$("#box").append($(`.2`).append($(`#img${randomPos[1]}`)));
$("#box").append($(`.3`).append($(`#img${randomPos[2]}`)));
$("#box").append($(`.4`).append($(`#img${randomPos[3]}`)));
$("#box").append($(`.5`).append($(`#img${randomPos[4]}`)));
$("#box").append($(`.6`).append($(`#img${randomPos[5]}`)));
$("#box").append($(`.7`).append($(`#img${randomPos[6]}`)));
$("#box").append($(`.8`).append($(`#img${randomPos[7]}`)));
$("#box").append($(`.9`));


let emptyCase = 9;
function checkMove() {
  // div9  --------------------------------
  $(".6").click(() => {
    if ($(.9).text() == "") {
      $(".9").append($(`#img${randomPos[5]}`));
      emptyCase = 6;
    }
});
console.log(emptyCase);

  $(".8").click(() => {

    if ($(.9).hasClass('empty')) {
      $(".9").append($(`#img${randomPos[7]}`));
      
    }
    return emptyCase = 8;
    
  });
  // div8 ----------------------------------
  $(".5").click(() => {
    if ($(.8).text() == "") {
      $(".8").append($(`#img${randomPos[4]}`));
      return emptyCase = 5;
    }
  });
  $(".7").click(() => {
    if ($(.8).text() == "") {
      $(".8").append($(`#img${randomPos[6]}`));
      return emptyCase = 7;
    }
  });
  $(".9").click(() => {
    if ($(.8).text() == "") {
      $(".8").append($(`#img${randomPos[8]}`));
      return emptyCase = 9;
    }
  });
}
checkMove();

console.log($(0.8).click());
