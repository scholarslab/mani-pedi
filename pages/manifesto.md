---
layout: page
title: Manifesto
permalink: /manifesto
---
## Manifesto
<!-- 

<script>
    // load json from session storage and parse json object 
    var deathSpan = document.getElementById('covidDeaths'); 
    var CovidData = JSON.parse(sessionStorage.getItem('CovidData')); 
    // get totalDeaths count and turn into 123,456 format
    var totalDeaths = CovidData[0].totalDeaths.toLocaleString(); 
    deathSpan.replaceWith(totalDeaths); 
</script> 
<<<<<<< HEAD
-->
=======
--> 
<script>
$(document).ready(function() {
$(function () {
    var $accordionSection = $(window.location.hash);
    console.log($accordionSection);
    if ($accordionSection.length > 0) {
       $(window).scrollTop($(window.location.hash).offset().top);
       $accordionSection.prop('checked', true);
    }
});
});
</script>
{% include accordion.html %}
>>>>>>> 374fd6f47c8006ca0b7997866d2c07cfdfd6cacd
