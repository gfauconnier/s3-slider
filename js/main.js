var imgCar = ["img/projet2.png", "img/projet3.png", "img/projet4.png", "img/projet1.png"];
var descCar = ["yay", "test", "encoreblabla", "blabla"];
var interv = setInterval(displayCar, 1500);

var btnC = document.getElementsByClassName("btnCarousel");
btnC[0].addEventListener('click', function(){displayCar(1,1)});
btnC[1].addEventListener('click', function(){displayCar(1)});

function displayCar(cl = 0, direction = 0) {
  var n;
  if (direction == 0) {
    n = imgCar.shift();
    imgCar.push(n);
    document.getElementById("imgC").src = imgCar[0];
    n = descCar.shift();
    descCar.push(n);
    document.getElementById("texC").innerHTML = descCar[0];
  }
  else {
    n = imgCar.splice(0,0,imgCar[imgCar.length-1]);
    imgCar.pop();
    document.getElementById("imgC").src = imgCar[0];
    n = descCar.splice(0,0,descCar[descCar.length-1]);
    descCar.pop();
    document.getElementById("texC").innerHTML = descCar[0];
  }
  if (cl == 1){
    clearInterval(interv);
    setTimeout(function(){interv = setInterval(displayCar, 1500);},1)
  }
}
