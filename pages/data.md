---
layout: page
title: Data
permalink: /data
---
<h2 class='emma'>Data</h2>
<img src="assets/img/beersticker.png" alt="Beer Sticker" class="med-sticker-right">
<p>In order to support the overall project and the interactive <a href="/story">story</a> in particular, {{ site.title }} decided early on to put its ear to the ground and listen to how UVA and Charlottesville communities were reacting to the tumult and confusion that was the year 2020. To that end, the team cast a broad net to gather and, more importantly, record the ways our corner of the world has persisted and resisted through the global COVID-19 pandemic. Two weeks of flattening the curve turned into months and years, and communication via the internet became for many the only sustained communication to be had. Thus we've examined in various ways we connected with each other to talk about literally anything—though the conversation never seemed to stray too far from the viral elephant in the Zoom room—in both unidirectional and bidirectional forms. The importance of local journalism to history and freedom of thought spurred us to include the Charlottesvile <a href="https://dailyprogress.com/"><i>Daily Progress</i></a> and UVA's own <a href="https://www.cavalierdaily.com/"><i>Cavalier Daily</i></a> in the mix, but we knew that could not be the only sources. Social media has, for reasons beyond the scope of this project and site, found a central position in our society and culture today, and, for better or worse, it cannot be ignored. We therefore began collection from the UVA community on <a href="reddit.com/r/uva">Reddit</a> and <a href="twitter.com">Twitter</a>, two popular and unique digital forums where Virginians and the world alike shared their opinions. And did they ever.</p>
<h3 class='elise'>Data Summary & Motivating Questions</h3>
<p>As a general principle we wanted to be as inclusive as possible with our data. Therefore, we searched broadly by keywords like "UVA", "Cville", "mental health", "pandemic", "COVID". In the end we ended up with 730 Cavalier Daily and 884 Daily Progress articles fitting this description dating between March 3, 2020 and May 10, 2021. Social media naturally offered a whole lot more. From February through May 2020 we collected 3232 posts from the /r/UVA subreddit community and 51,998 tweets. In total, the corpus is composed of >3 million tokens (individual words) and >25,000 unique vocabulary from English. The total author count, estimated to the best of our abilities, is no less than 20,000 people.</p>
<p>The sheer enormity of data in Digital Humanities projects can obscure what each and every datum can and does contribute to analysis. At this quantity and working with various genres, we acknowledge that the quality of understanding individual voices in the crowd cannot compare to close reading or textual exegesis. However, we offer an introductory look at what it means to listen to the world all at once—a 21st-century pastime if there is one. So, for a few months we tuned into what our community was discussing, and we asked basic questions, such as "What matters most to people now?", "How they living and describing their lives in these times?", and "What can we learn about our future selves from our current decisions?" Those questions may never be fully answered to our satisfaction, but we hope that the information on this page and this site in general can help everyone come to make sense of our collective experience as well as a bit of our individual experiences alike. 
<h3 class='grace'>Methods</h3>
<p>The overwhelming majority of the data processing was done in the Python programming language. In addition to its straightforward syntax and broad support, Python is well-known for its rich base of tools for Natural Language Processing (NLP), the area of research straddling computer science and linguistics that investigates the usage of natural, i.e. human, languages. In Python, a set of methods (techniques of data manipulation or presentation) is gathered into a what is called a "package" or "library". The most useful libraries used in the data wrangling for {{ site.title }} is featured below.</p>
<h4 class='grace'>Toolset</h4>
<p>In no particular order of importance, the following packages, tools, and language models were helpful in gathering, processing, and representating the data you see on this page:</p>
<ul>
<li>General Data Science
<ul>
<li><a href="https://jupyter.org/">JupyterLab</a></li>
<li><a href="https://pandas.pydata.org/docs/index.html">Pandas</a></li>
<li><a href="https://pytorch.org/">PyTorch</a></li>
</ul>
<li>NLP
<ul>
<li><a href="https://spacy.io/">spaCy</a></li>
<li><a href="www.nltk.org/">NLTK</a></li>
<li><a href="https://github.com/sloria/TextBlob">TextBlob</a></li>
<li><a href="https://github.com/google-research/bert">BERT</a></li>
</ul>
<li>Internet & APIs
<ul>
<li><a href="https://github.com/psf/requests">Requests</a></li>
<li><a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">BeautifulSoup</a></li>
<li><a href="https://github.com/praw-dev/praw">PRAW (Reddit)</a></li>
<li><a href="https://www.tweepy.org/">Tweepy (Twitter)</a></li>
</ul>
<li>Presentation
<ul>
<li><a href="https://matplotlib.org/">Matplotlib</a></li>
<li><a href="https://amueller.github.io/word_cloud/index.html">WordCloud</a></li>
</ul>
<br>
<p>Automatated, regular retrieval of data was accomplished by using the <a href="https://praxis.scholarslab.org/resources/bash/">Bash</a> scripting language and <a href="https://en.wikipedia.org/wiki/Cron">cron</a> Linux job scheduler on a Raspberry Pi 4 running a headless <a href="https://ubuntu.com/server">Ubuntu Server</a>.</p>
<h3 class='crystal'>Results</h3>
<p></p>
<h4 class='crystal'>The Cavalier Daily</h4>
<div>
    <h5 class='crystal'>Title Vocabulary</h5>
    <img src="assets/data/results/CavDailyTitleVocab.png" alt="Cavalier Daily Title Vocabulary" class="data-plot-left">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Article Vocabulary</h5>
    <img src="assets/data/results/CavDailyArticleVocab.png" alt="Cavalier Daily Article Vocabulary" class="data-plot-right">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Average Cumulative (Title+Article) Sentiment Analysis</h5>
    <img src="assets/data/results/CavDailyAvgSent.png" alt="Cavalier Daily Average (Title and Article) Sentiment Analysis" class="data-plot-left">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Separate Title and Article Sentiment Analysis</h5>
    <img src="assets/data/results/CavDailyTitleArticleSent.png" alt="Cavalier Daily Separate Title and Article Sentiment Analysis" class="data-plot-right">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Topic Analysis</h5>
    <!-- <img src="" alt="" class="data-plot-left"> -->
    <h6>CavDaily Title Topics</h6>
<!-- Slideshow container -->
<div class="slideshow-container">

<!-- Full-width images with number and caption text -->
<div class="mySlides fade">
    <div class="numbertext">1 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic0.png" style="width:100%">
    <!-- <div class="text">Caption Text</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">2 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic1.png" style="width:100%">
    <!-- <div class="text">Caption Two</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">3 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic2.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">4 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic3.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">5 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic4.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">6 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic5.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">7 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic6.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">8 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic7.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">9 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic8.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">10 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/title_topic9.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<!-- Next and previous buttons -->
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
<span class="dot" onclick="currentSlide(1)"></span>
<span class="dot" onclick="currentSlide(2)"></span>
<span class="dot" onclick="currentSlide(3)"></span>
<span class="dot" onclick="currentSlide(4)"></span>
<span class="dot" onclick="currentSlide(5)"></span>
<span class="dot" onclick="currentSlide(6)"></span>
<span class="dot" onclick="currentSlide(7)"></span>
<span class="dot" onclick="currentSlide(8)"></span>
<span class="dot" onclick="currentSlide(9)"></span>
<span class="dot" onclick="currentSlide(10)"></span>
</div> 

<h6>CavDaily Text Topics</h6>

<!-- Slideshow container -->
<div class="slideshow-container">

<!-- Full-width images with number and caption text -->
<div class="mySlides fade">
    <div class="numbertext">1 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic0.png" style="width:100%">
    <!-- <div class="text">Caption Text</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">2 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic1.png" style="width:100%">
    <!-- <div class="text">Caption Two</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">3 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic2.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">4 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic3.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">5 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic4.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">6 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic5.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">7 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic6.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">8 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic7.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">9 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic8.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">10 / 10</div>
    <img src="assets/data/results/topic_modeling/cavdaily/text_topic9.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<!-- Next and previous buttons -->
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
<span class="dot" onclick="currentSlide(1)"></span>
<span class="dot" onclick="currentSlide(2)"></span>
<span class="dot" onclick="currentSlide(3)"></span>
<span class="dot" onclick="currentSlide(4)"></span>
<span class="dot" onclick="currentSlide(5)"></span>
<span class="dot" onclick="currentSlide(6)"></span>
<span class="dot" onclick="currentSlide(7)"></span>
<span class="dot" onclick="currentSlide(8)"></span>
<span class="dot" onclick="currentSlide(9)"></span>
<span class="dot" onclick="currentSlide(10)"></span>
</div> 

</div>
<h4 class='crystal'>The Daily Progress</h4>
<div>
    <h5 class='crystal'>Title Vocabulary</h5>
    <img src="assets/data/results/DailyProgTitleVocab.png" alt="Daily Progress Title Vocabulary" class="data-plot-left">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Article Vocabulary</h5>
    <img src="assets/data/results/DailyProgArticleVocab.png" alt="Daily Progress Article Vocabulary" class="data-plot-right">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Average Cumulative (Title+Article) Sentiment Analysis</h5>
    <img src="assets/data/results/DailyProgAvgSent.png" alt="Daily Progress Average (Title and Article) Sentiment Analysis" class="data-plot-left">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Separate Title and Article Sentiment Analysis</h5>
    <img src="assets/data/results/DailyProgTitleArticleSent.png" alt="Daily Progress Separate Title and Article Sentiment Analysis" class="data-plot-right">
    <p></p>
</div>
<div>
    <h5 class='crystal'>Topic Analysis</h5>
    <!-- <img src="" alt="" class="data-plot-left"> -->
       <h6>DailyProg Title Topics</h6>
<!-- Slideshow container -->
<div class="slideshow-container">

<!-- Full-width images with number and caption text -->
<div class="mySlides fade">
    <div class="numbertext">1 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic0.png" style="width:100%">
    <!-- <div class="text">Caption Text</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">2 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic1.png" style="width:100%">
    <!-- <div class="text">Caption Two</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">3 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic2.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">4 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic3.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">5 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic4.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">6 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic5.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">7 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic6.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">8 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic7.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">9 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic8.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">10 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/title_topic9.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<!-- Next and previous buttons -->
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
<span class="dot" onclick="currentSlide(1)"></span>
<span class="dot" onclick="currentSlide(2)"></span>
<span class="dot" onclick="currentSlide(3)"></span>
<span class="dot" onclick="currentSlide(4)"></span>
<span class="dot" onclick="currentSlide(5)"></span>
<span class="dot" onclick="currentSlide(6)"></span>
<span class="dot" onclick="currentSlide(7)"></span>
<span class="dot" onclick="currentSlide(8)"></span>
<span class="dot" onclick="currentSlide(9)"></span>
<span class="dot" onclick="currentSlide(10)"></span>
</div> 

<h6>CavDaily Text Topics</h6>

<!-- Slideshow container -->
<div class="slideshow-container">

<!-- Full-width images with number and caption text -->
<div class="mySlides fade">
    <div class="numbertext">1 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic0.png" style="width:100%">
    <!-- <div class="text">Caption Text</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">2 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic1.png" style="width:100%">
    <!-- <div class="text">Caption Two</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">3 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic2.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">4 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic3.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">5 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic4.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">6 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic5.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">7 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic6.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">8 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic7.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">9 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic8.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<div class="mySlides fade">
    <div class="numbertext">10 / 10</div>
    <img src="assets/data/results/topic_modeling/dailyprog/text_topic9.png" style="width:100%">
    <!-- <div class="text">Caption Three</div> -->
</div>

<!-- Next and previous buttons -->
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
<span class="dot" onclick="currentSlide(1)"></span>
<span class="dot" onclick="currentSlide(2)"></span>
<span class="dot" onclick="currentSlide(3)"></span>
<span class="dot" onclick="currentSlide(4)"></span>
<span class="dot" onclick="currentSlide(5)"></span>
<span class="dot" onclick="currentSlide(6)"></span>
<span class="dot" onclick="currentSlide(7)"></span>
<span class="dot" onclick="currentSlide(8)"></span>
<span class="dot" onclick="currentSlide(9)"></span>
<span class="dot" onclick="currentSlide(10)"></span>
</div> 
</div>
*/
<h3 class='savanna'>Contact</h3>
<p>Please contact <a href="mailto:amt3ad@virginia.edu"><span class='aaron'>Aaron</span></a> for questions about the data presented above. 