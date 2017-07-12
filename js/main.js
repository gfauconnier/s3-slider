// an array containing img sources and associated text
var imgCar = [["img/projet2.png","yay"], ["img/projet3.png", "test"], ["img/projet4.png", "encoreblabla"], ["img/projet1.png", "blabla"]];

// sets an intervarl to launch  and call displayCar function
var interv = setInterval(displayCar, 1500);

// add onclick events to previous and next buttons
var btnC = document.getElementsByClassName("btnCarousel");
btnC[0].addEventListener('click', function(){displayCar(1,1)});
btnC[1].addEventListener('click', function(){displayCar(1)});

/**
 * displayCar - function that makes the carousel run automatically or with the use of buttons
 *
 * @param  {type} clicked = 0   1 is sent when the user clicks one of the buttons, 0 if auto
 * @param  {type} direction = 0 1 is sent if previous button is clicked, otherwise 0
 * @return {type}               no return only display
 */
function displayCar(clicked = 0, direction = 0) {
  var temp;

  if (direction == 0) { // next button or auto carousel
    // takes the first element of imgCar array and sends it to last position of the array
    imgCar.push(imgCar.shift());
    // displays the image and the text corresponding
    document.getElementById("imgC").src = imgCar[0][0];
    document.getElementById("texC").innerHTML = imgCar[0][1];
  }
  else { // previous button is clicked
    // takes the last element of imgCar array and puts it in first position
    imgCar.unshift(imgCar.pop());
    // displays the image and associated text
    document.getElementById("imgC").src = imgCar[0][0];
    document.getElementById("texC").innerHTML = imgCar[0][1];
  }
  if (clicked == 1){ // when previous or next button are clicked
    // stop the setInterval() and relaunches it after 1ms (to avoid multiple iterations of it)
    clearInterval(interv);
    setTimeout(function(){interv = setInterval(displayCar, 1500);},1)
  }
}
