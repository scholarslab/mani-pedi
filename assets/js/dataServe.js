/* 
 * 
 * {Mani-Pedi} Data Server Handling
 * 
 */

/*
 * COVID Stats
 */

var usdeathsURL = 'https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=US'; 

let request = new XMLHttpRequest(); 

request.open('GET', usdeathsURL); 
request.responseType = 'json'; 
request.send(); 

request.onload = function () {
    var CovidDataR = request.response; 
    sessionStorage.setItem('CovidData', JSON.stringify(CovidDataR));
};

/* 
 * Social Media & Journalism Data
 */ 

// CavDaily JSON File

var CavDailyData = $.getJSON("/assets/data/CavDaily.json", function () {
    console.log("CavDaily success");
})
    .done(function () {
        console.log("CavDaily second success");
    })
    .fail(function () {
        console.log("CavDaily error");
    })
    .always(function () {
        console.log("CavDaily complete");
    });
    sessionStorage.setItem('CavDailyData', JSON.stringify(CavDailyData));

/* DailyProgData 

var DailyProgData = $.getJSON("/assets/data/DailyProg.json", function () {
    console.log("DailyProg success");
})
    .done(function () {
        console.log("DailyProg second success");
    })
    .fail(function () {
        console.log("DailyProg error");
    })
    .always(function () {
        console.log("DailyProg complete");
    });
    sessionStorage.setItem('DailyProgData', JSON.stringify(DailyProgData));
*/

/* Data page slideshow */ 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 