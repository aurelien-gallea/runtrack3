let pos = ["1","2","3","4","5","6"]; // position de nos images

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


$(document).ready(function () {
    $("button").click(function (e) { 

        // on ajoute une classe qui porte le numéro de la future position
        $('#img1').addClass(pos[0]);
        $('#img2').addClass(pos[1]);
        $('#img3').addClass(pos[2]);
        $('#img4').addClass(pos[3]);
        $('#img5').addClass(pos[4]);
        $('#img6').addClass(pos[5]);
        // on appel nos classes mélangés
        $("#start").append($(".1"));
        $("#start").append($(".2"));
        $("#start").append($(".3"));
        $("#start").append($(".4"));
        $("#start").append($(".5"));
        $("#start").append($(".6"));
    });
});


let checkbox = []; // notre tableau de verification de l'ordre des images

function check() {
  let count = 0;

  if (checkbox.length == 6) {
    for (let i = 0; i < checkbox.length; i++) {
      if (i == checkbox[i] - 1) {
        count++;
        console.log(count);
      } else {
        $("#check").after("<h2>Vous avez perdu</h2>");
        $("h2").css("color", "red");
        
        
        break;
      }
    }
    if (count == checkbox.length) {
      $("#check").after("<h2>Vous avez gagné</h2>");
      $("h2").css("color", "green");
    }
    $("h2").css("text-align", "center");
  };
}

$(document).ready(function () {
  $("#img1").click(function (e) {
    e.preventDefault();
    $("#img1").remove();
    $("#check").append(
      '<img id="img1" src="./images/arc1.png" alt="arc1"></img>'
    );
    checkbox.push(1);
    check();
  });

  $("#img2").click(function (e) {
    e.preventDefault();
    $("#img2").remove();
    $("#check").append(
      '<img id="img2" src="./images/arc2.png" alt="arc2"></img>'
    );
    checkbox.push(2);
    check();
  });

  $("#img3").click(function (e) {
    e.preventDefault();
    $("#img3").remove();
    $("#check").append(
      '<img id="img3" src="./images/arc3.png" alt="arc3"></img>'
    );
    checkbox.push(3);
    check();
  });

  $("#img4").click(function (e) {
    e.preventDefault();
    $("#img4").remove();
    $("#check").append(
      '<img id="img4" src="./images/arc4.png" alt="arc4"></img>'
    );
    checkbox.push(4);
    check();
  });

  $("#img5").click(function (e) {
    e.preventDefault();
    $("#img5").remove();
    $("#check").append(
      '<img id="img5" src="./images/arc5.png" alt="arc5"></img>'
    );
    checkbox.push(5);
    check();
  });

  $("#img6").click(function (e) {
    e.preventDefault();
    $("#img6").remove();
    $("#check").append(
      '<img id="img6" src="./images/arc6.png" alt="arc6"></img>'
    );
    checkbox.push(6);
    check();
  });
});
