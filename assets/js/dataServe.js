/* 
 * 
 * {Mani-Pedi} Data Server Handling
 * 
 */

/*
 * Manifesto XMLHttpRequest & get-{section} Functions
 */

// Call Manifesto XMLHttpRequest Object 

loadDoc("/assets/manifesto.html", getAssessment);

// loadDoc("url-2", get);

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

// getAssessment(xhttp) 

function getAssessment(xhttp) {
document.getElementById("assessment").innerHTML = xhttp.responseText;

}

// get


/* 
 * Social Media & Journalism Data
 */ 

// CavDaily JSON File

var CavDailyData = $.getJSON("/assets/data/CavDaily.json", function () {
    console.log("success");
})
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("complete");
    });


// DailyProgData 

var DailyProgData = $.getJSON("/assets/data/DailyProg.json", function () {
    console.log("success");
})
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("complete");
    });

/*
// etc... 

// Set another completion function for the request above

CavDailyData.always(function () {
    console.log("second complete");
});
*/

sessionStorage.setItem('CavDailyData', JSON.stringify(CavDailyData));
sessionStorage.setItem('CavDailyData', JSON.stringify(CavDailyData));