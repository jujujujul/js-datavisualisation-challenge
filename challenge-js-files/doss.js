


//    TABLEAU 1=
        
let div = document.createElement("div");

let data = [];
let table = document.getElementById("table1");

let container = document.getElementById("mw-content-text");

let years = table.getElementsByTagName("tr")[1].getElementsByTagName("th");

let yearsArray = [];

let rows = table.getElementsByTagName("tr");

div.id = "tabdiv";

container.insertBefore(div, table1);


for(let i = 2; i < years.length; i++) {
    let content = years[i].innerHTML;
    yearsArray.push(content);
}
for(let i = 2; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    for(let j = 0; j < cells.length; j++) {
        if(j === 0) {
            var pays = cells[j].innerHTML;
        }else if(!isNaN(parseInt(cells[j].innerHTML))) {
            data.push({
                data:parseInt(cells[j].innerHTML), 
                pays:pays, 
                years:yearsArray[j-1]
            });
        }
    }
}

console.log(data);

var svg = dimple.newSvg("#tabdiv", "90%", 500);
var myChart = new dimple.chart(svg, data);
myChart.setBounds(30, 110, "90%", 305);
var x = myChart.addCategoryAxis("x", "years");
myChart.addMeasureAxis("y", "data");
myChart.ease = "bounce";
myChart.addSeries("pays", dimple.plot.line);
myChart.addLegend(0, 10, "100%", 100);
myChart.draw(5000);




//Tableau 2      
      
let table2 = document.getElementById("table2");

var div2 = document.createElement("div");
var container2 = document.getElementById("mw-content-text");

container2.insertBefore(div2, table2);
div2.id = "tab2div";
let startDate = 2007;
let endDate = 2012;
let countYears = 3;
let country = "";
let date = "";
let value = "";
let data2 = [];

for(let i = 1; table2.rows.length > i; i++){
    for(let j = 0; endDate - startDate >= j; j++){
        country = table2.rows[i].cells[1].innerText;
        date = startDate + j;
        if(startDate + j < 2010){
            value = table2.rows[i].cells[2].innerText;
        }else{
            value = table2.rows[i].cells[3].innerText;
        }
    data2.push({data : parseInt(value), pays: country, years: date});
    }
}
console.log(data2);




var svg = dimple.newSvg("#tab2div", "90%", 500);
var myChart = new dimple.chart(svg, data2);
myChart.setBounds(30, 110, "90%", 300);
var x = myChart.addCategoryAxis("x", "years");
myChart.addMeasureAxis("y", "data");
myChart.addSeries("pays", dimple.plot.line);
myChart.addLegend(0, 10, "100%", 60);
myChart.draw();
