/* 
 * 
 * {Mani-Pedi} Data Server Handling
 * 
 */

/*
 * Manifesto XMLHttpRequest & get-{section} Functions
 */

// Call Manifesto XMLHttpRequest Object 
/*
loadDoc("/pages/manifesto.html", getAssessment);

function loadDoc(url, cFunction) {
  var xhttp = new XMLHttpRequest(); // creates new variable of an XMLHttpRequest
  xhttp.onreadystatechange = function() { // attribute calls function when readyState property changes
    if (this.readyState == 4 && this.status == 200) { // (0-)4: request finished, response ready
      cFunction(this);
    }
 };
  xhttp.open("GET", url, true);
  xhttp.send();
}
*/
// getAssessment(xhttp) 

$('getAssessment').load('manifesto.html #assessment');

// get


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


// DailyProgData 

var DailyProgData = $.getJSON("/assets/data/DailyProg.json", function () {
    console.log("DailyProg success");
    //console.log(DailyProgData);
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

sessionStorage.setItem('CavDailyData', JSON.parse(CavDailyData));
sessionStorage.setItem('DailyProgData', JSON.parse(DailyProgData));