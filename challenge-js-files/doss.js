//let grandTableau = [] //on va tout pusher ici a la fin! 
//var data_1 = document.getElementsById('table1').getElementsByTagName('td');
//
//for (var i=0; i< lenght.data_1; i = i+12 ){
//    var x = i;
//    var y = x + 12;
//    //Ici, on selectionne par bloc de 12 dates on  donc 35 ligne
//    var ligneTableau = {};
//    // Afin de vider l'objet encodé, avant qu'il soit pushé dans le grand tableau, sinon tout se repeterai jusqu'a 12 fois
//    
//        for (var j=x ; j< y; j++ ){  // ici on est dans du case par case
//            ligneTableau.Pays = data_1[x].innerHTML; // 
//            ligneTableau.Date1 = data_1[x +1].innerHTML;
//            ligneTableau.Date2 = data_1[x +2].innerHTML;
//            ligneTableau.Date3 = data_1[x +3].innerHTML;
//            ligneTableau.Date4 = data_1[x +4].innerHTML;
//            ligneTableau.Date5 = data_1[x +5].innerHTML;
//            ligneTableau.Date6 = data_1[x +6].innerHTML;
//            ligneTableau.Date7 = data_1[x +7].innerHTML;
//            ligneTableau.Date8 = data_1[x +8].innerHTML;
//            ligneTableau.Date9 = data_1[x +9].innerHTML;
//            ligneTableau.Date10 = data_1[x +10].innerHTML;
//            ligneTableau.Date11 = data_1[x +11].innerHTML;
//        }
//}
//grandTableau.push(ligneTableau);
//
//var tab1 = document.getElementsById('table1');
//
//let tab1Container =  document.createElement("div");
//div.id = "licorne";
//
//tab1parent.insertBefore(tab1Container, tab1);







//
//--------
//
//let data = [];
//
//let table = document.getElementById('table1');
//
//let years = table.getElementsByTagName('tr')[1].getElementsByTagName('th');
//let yearsArray = [];
//
//for(let i = 2; i < years.length; i++) {
//  let content = years[i].innerHTML;
//  yearsArray.push(content);
//}
//
//let rows = table.getElementsByTagName('tr');
//
//for(let i = 2; i < rows.length; i++) {
//  let cells = rows[i].getElementsByTagName('td');
//
//  for (let j = 0; j < cells.length; j++) {
//    if(j === 0) {
//      var pays = cells[j].innerHTML;
//    }
//      
//    else if (isNaN(parseInt(cells[j].innerHTML))){
//        data.push({data:cells[j].innerHTML, pays:pays, year:yearsArray[j-1]});
//    }
//  }
//
//}
//
//console.log(data);
//
//
//
//var tab1 = document.getElementsById('table1');
//let tab1Container =  document.createElement("div");
//div.id = "licorne";
//
//
//
//
//
//   var svg = dimple.newSvg("#licorne" , "100%",400);
//      
//      var myChart = new dimple.chart(svg, data);
//     
//      myChart.setBounds(60, 30, "100%", 305);
//      var x = myChart.addCategoryAxis("x", "years");
//      myChart.addMeasureAxis("y", "data");
//      myChart.addSeries("pays", dimple.plot.line);
//      myChart.addLegend(0, 10, "100%", 200);
//      myChart.draw();
      
      
      
      
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
myChart.addLegend(0, 10, "100%", 100);
myChart.draw();


//var container2 = document.getElementById("mw-content-text");
//let data2 = [];
//let years2 = table2.getElementsByTagName("tr")[1].getElementsByTagName("td");
//let years2Array = [];
//container2.insertBefore(div2, table2);
//console.log(years2);
//console.log(container2);
//div2.id = "tab2div";
//for( let k=2; k < years2.length; k++ ) {
//    let content2 = years2[k].innerHTML;
//    years2Array.push(content2);
//}
//console.log(years2Array);
//console.log('test')
//let rows2 = table2.getElementsByTagName("tr");
//
//for (let k = 2; k < rows2.length; k++) {
// let cells2 = rows2[k].getElementsByTagName("td");
//
//    for (let l = 0; l < cells2.length; l++){
//            if (l === 0){
//                var pays2 = cells2[l].innerHTML;
//            }
//            else if (!isNaN(parseInt(cells2[l].innerHTML))) {
//                
//                 data2.push({data:parseInt(cells2[l].innerHTML), pays2:pays2, years2:years2Array[l-1]});
//            }
//    }
//
//}
//
//
//var svg = dimple.newSvg("#tab2div", "90%", 400);
//var myChart = new dimple.chart(svg, data2);
//var x = myChart.addCategoryAxis("x", "years2");
//myChart.setBounds(30, 110, "100%", 305);
//myChart.addMeasureAxis("y", "data2");
//myChart.addSeries("pays2", dimple.plot.area);
//myChart.addLegend(0, 10, "100%", 500);
//myChart.draw();


//-------------------------------------------
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
myChart.addSeries("pays", dimple.plot.line);
myChart.addLegend(0, 10, "100%", 100);
myChart.draw();

