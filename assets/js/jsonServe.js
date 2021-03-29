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