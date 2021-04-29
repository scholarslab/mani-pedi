---
layout: page
title: Manifesto
permalink: /manifesto
---
## Manifesto

<div align=“center”>A Manifesto on the Digital Pedagogy of Colleges and Universities
Prepared by Grace Alvino, Emma Dove, Elise Foote, Crystal Luo, Savanna Morrison, and Aaron Thompson</div>

<p>This manifesto of Connection Established is a call to action from this year’s Praxis cohort to our fellow members of the UVA community. We took the dedicated space of exploration and learning provided by the Scholars’ Lab to reflect on and then voice our dreams and anxieties about the practice of digital pedagogy here at UVA. Another portion of our project documents the unique and shared experience of digital pedagogy for various UVA community members through <a href="/story">an interactive narrative</a>. The two halves are meant to complement one another, forming two halves of a single conversation about this past year’s educational experience. Each emphasizes different aspects of the interconnectedness of teaching, learning, and living during times of crisis.</p> 
<p>The form of the Manifesto was chosen to reflect both the strength of these beliefs and our recognition that they must be transformed into action if they are to have any meaning. Many of the institutional transformations we call for are drawn directly from a still-growing list of demands from the <a href="https://twitter.com/BSAatUVA/status/1267496865601290241?s=20">Black Student Alliance</a>, the <a href="https://docs.google.com/document/d/1qrFAM_DYhfJtHwj_B5Kf_P7fhmz25V7dUygXq_cZPkc/edit">#6Asks Campaign</a>, <a href="https://ucwva.org">the workers’ union</a>, and more. Most have appeared in some way, shape, or form in a document or report sponsored by the University itself. While we set out hoping to collect resources and recommendations for the University’s teaching staff, we realized many of these local solutions would be profoundly limited without structural change. We include them here in order to make explicit the connection between UVA’s role as a political and economic institution and its role as a place of learning.</p>

<!-- 

<script>
    // load json from session storage and parse json object 
    var deathSpan = document.getElementById('covidDeaths'); 
    var CovidData = JSON.parse(sessionStorage.getItem('CovidData')); 
    // get totalDeaths count and turn into 123,456 format
    var totalDeaths = CovidData[0].totalDeaths.toLocaleString(); 
    deathSpan.replaceWith(totalDeaths); 
</script> 
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
