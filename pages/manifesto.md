---
layout: page
title: Manifesto
permalink: /manifesto
---

## Manifesto

<p><i>A Manifesto on the Digital Pedagogy of Colleges and Universities</i></p>
<p><i>Prepared by Grace Alvino, Emma Dove, Elise Foote, Crystal Luo, and Savanna Morrison</i></p>

<p>This manifesto of Connection Established is a call to action from this year’s Praxis cohort to our fellow members of the UVA community. We took the dedicated space of exploration and learning provided by the Scholars’ Lab to reflect on and then voice our dreams and anxieties about the practice of digital pedagogy here at UVA. Another portion of our project documents the unique and shared experience of digital pedagogy for various UVA community members through <a href="/story">an interactive narrative</a>. The pieces are meant to complement one another, forming two halves of a single conversation about this past year’s educational experience. Each emphasizes different aspects of the interconnectedness of teaching, learning, and living during times of crisis.</p> 

<p>We chose the form of the Manifesto to reflect both the strength of our convictions, and our recognition that convictions must be transformed into actions if they are to have any lasting meaning. While we set out hoping to collect digital resources and recommendations for the University’s teaching staff, we realized many of these local solutions would be profoundly limited without structural transformation. For that reason, we have included both individual recommendations and institutional demands in order to make explicit the connection between the University of Virginia’s role as a political and economic organization and its role as a place of learning. We are very far from the first to recognize and name the need for change. Many of the institutional transformations we call for are drawn directly from a still-growing list of demands from the <a href="https://twitter.com/BSAatUVA/status/1267496865601290241?s=20">Black Student Alliance</a>, the <a href="https://docs.google.com/document/d/1qrFAM_DYhfJtHwj_B5Kf_P7fhmz25V7dUygXq_cZPkc/edit">#6Asks Campaign</a>, <a href="https://ucwva.org">the workers’ union</a>, and other organizations in and around UVA. Most have appeared in some way, shape, or form in a document or report sponsored by the University itself. Our hope was to illustrate how demands for social and economic justice at the University are inextricably connected to demands for better pedagogical practices on the part of students, teachers, and administrators alike.</p>

<p>We have divided the Manifesto into a Preamble, seven themes (presented alphabetically), and a Coda. Some of the ideas and stated demands are repeated across sections. Some sections link to and from one another to gesture towards the interconnectedness of each theme. Thinking about how certain issues are connected can be intimidating for those of us invested in making change. We’re often left confronting the enormity of the work ahead of us, asking ourselves, “Where do I start?” After a year of exploring connectivity and community at UVA, we argue that the answer can be: “Anywhere, which is also everywhere.” For this reason, we invite our readers to not only think of each section as a group of problems to be solved, but as a set of entry points where you can begin to take action.</p>

<!-- javascript for opening and closing the accordion -->
<script>
$(document).ready(function() {
$(function () {
    var $accordionSection = $(window.location.hash);
    console.log($accordionSection);
    if ($accordionSection.length > 0) {
       $(window).scrollTop($(window.location.hash).next().offset().top);
       $accordionSection.prop('checked', true);
    }
});
$('a').click(function() {
  $(window).scrollTop($($(this).attr('href')).next().offset().top);
  $($(this).attr('href')).prop('checked', true);
});
});

</script>
{% include accordion.html %}

<!-- initializes citations -->
<script>
$(function() {
    $("[rel=footnote]").inlineFootnote({
      boxMargin: 20, // px
	    hideDelay: 200, // ms
	    hideFromContent: "[rev=footnote]",
	    maximumBoxWidth: 500, // px
	    boxId: "footnote_box"
	  });
	});
</script>