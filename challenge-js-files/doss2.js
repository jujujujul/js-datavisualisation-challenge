let bodyContent = document.getElementById("bodyContent");
var div3 = document.createElement("div");
var container3 = document.getElementById("content");
container3.insertBefore(div3, bodyContent);
div3.id = "tab3div";

var svg = dimple.newSvg("#tab3div", "90%", 500);
var myChart = new dimple.chart(svg, []);
myChart.setBounds(60, 30, "100%", "70%");
myChart.addCategoryAxis("x", "number");
myChart.addMeasureAxis("y", "variable");
myChart.addColorAxis("variable", ["#f9c7e9", "#FABF8F", "#f9c7e9"]);
var s = myChart.addSeries(null, dimple.plot.area);
myChart.draw();


//let j = 1; activer seulement pour additionner les variables sur y
let data3 = []


function chartprout() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://inside.becode.org/api/v1/data/random.json");
    ourRequest.onload = function() {
        ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);


    for ( let i=0; i<ourData.length; i++ ){

        obj = {
            variable: ourData[i][1],
            // number: j, activer seulement pour additionner les variables sur y
            number: ourData[i][0],
        }
        data3.push(obj);
        // j++; activer seulement pour additionner les variables sur y 
}
console.log(data3);
};

ourRequest.send();
myChart.data = data3;
myChart.draw();
setInterval(function(){chartprout()}, 1000);

}

chartprout();