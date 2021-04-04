/* 
 * 
 * {Mani-Pedi} Data Server Handling
 * 
 */

/*
 * Manifesto
 */



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