



const button = document.getElementById("button");


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

button.addEventListener("click", myFunction);


button.onclick
          // Load the Visualization API and the piechart package.
          google.load('visualization', '1.0', {'packages':['corechart']});

          // Set a callback to run when the Google Visualization API is loaded.
          google.setOnLoadCallback(drawChart);

          // Callback that creates and populates a data table,
          // instantiates the pie chart, passes in the data and
          // draws it.
          function drawChart() {

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');    
            data.addColumn('number', 'Slices');
            data.addRows([
              ['SCORE', 3],
              ['AHT', 1],
              ['ART', 1],
              ['QUALITY', 1],
              ['RESPONSE', 2]
            ]);
            // Create the data table.
            var data2 = new google.visualization.DataTable();
            data2.addColumn('string', 'Topping');
            data2.addColumn('number', 'Slices');
            data2.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 15],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);

            var data3 = new google.visualization.DataTable();
            data3.addColumn('string', 'Year');
            data3.addColumn('number', 'Sales');
            data3.addColumn('number', 'Expenses');
            data3.addRows([
              ['2004', 1000, 400],
              ['2005', 1170, 460],
              ['2006',  860, 580],
              ['2007', 1030, 540]
            ]);
                  var data4 = new google.visualization.DataTable();
            data4.addColumn('string', 'Topping');    
            data4.addColumn('number', 'Slices');
            data4.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
                       var data5 = new google.visualization.DataTable();
            data5.addColumn('string', 'Topping');    
            data5.addColumn('number', 'Slices');
            data5.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
                 var data6 = new google.visualization.DataTable();
            data6.addColumn('string', 'Topping');    
            data6.addColumn('number', 'Slices');
            data6.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
      
           var data7 = new google.visualization.DataTable();
            data7.addColumn('string', 'Topping');    
            data7.addColumn('number', 'Slices');
            data7.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
                 var data8 = new google.visualization.DataTable();
            data8.addColumn('string', 'Topping');    
            data8.addColumn('number', 'Slices');
            data8.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
                 var data9 = new google.visualization.DataTable();
            data9.addColumn('string', 'Topping');    
            data9.addColumn('number', 'Slices');
            data9.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
                 var data10 = new google.visualization.DataTable();
            data10.addColumn('string', 'Topping');    
            data10.addColumn('number', 'Slices');
            data10.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
      
    var data11 = new google.visualization.DataTable();
            data11.addColumn('string', 'Topping');    
            data11.addColumn('number', 'Slices');
            data11.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
      
    var data12 = new google.visualization.DataTable();
            data12.addColumn('string', 'Topping');    
            data12.addColumn('number', 'Slices');
            data12.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
      
            // Set chart options
            var options = {'title':'AGENT PREFORMANCE',
                           'width':250,
                           'height':200};
            // Set chart options
            var options2 = {'title':'How Much Pizza You Ate Last Night',
                           'width':250,
                           'height':200};
            // Set chart options
            var options3 = {'title':'Line chart',
                           'width':250,
                           'height':200};
// Set chart options
            var options4 = {'title':'Line chart',
                           'width':250,
                           'height':200};
var options5 = {'title':'Line chart',
                           'width':250,
                           'height':200};
var options6 = {'title':'Line chart',
                           'width':250,
                           'height':200};
var options7 = {'title':'Line chart',
                           'width':250,
                           'height':200};
var options8 = {'title':'Line chart',
                           'width':250,
                           'height':200};
var options9 = {'title':'Line chart',
                           'width':250,
                           'height':200};
var options10 = {'title':'Line chart',
                           'width':250,
                           'height':200};

var options11 = {'title':'Line chart',
                           'width':250,
                           'height':200};

var options12 = {'title':'Line chart',
                           'width':250,
                           'height':200};

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
            var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
            chart2.draw(data2, options2);
            var chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));
            chart3.draw(data3, options3);
var chart4 = new google.visualization.LineChart(document.getElementById('chart_div4'));
            chart4.draw(data4, options4);
var chart5 = new google.visualization.LineChart(document.getElementById('chart_div5'));
            chart5.draw(data4, options4);
var chart6 = new google.visualization.LineChart(document.getElementById('chart_div6'));
            chart6.draw(data4, options4);
var chart7 = new google.visualization.LineChart(document.getElementById('chart_div7'));
            chart7.draw(data4, options4);
var chart8 = new google.visualization.LineChart(document.getElementById('chart_div8'));
            chart8.draw(data4, options4);
var chart9 = new google.visualization.LineChart(document.getElementById('chart_div9'));
            chart9.draw(data4, options4);
var chart10 = new google.visualization.LineChart(document.getElementById('chart_div10'));
            chart10.draw(data4, options4);
var chart11 = new google.visualization.LineChart(document.getElementById('chart_div11'));
            chart11.draw(data4, options4);
var chart12 = new google.visualization.LineChart(document.getElementById('chart_div12'));
            chart12.draw(data4, options4);

          }



function hourglass() {
  var a;
  a = document.querySelectorAll("#div").forEach((v)=>{
v.innerHTML = "&#xf251;";
  setTimeout(function () {
      v.innerHTML = "&#xf252;";
    }, 1000);
  setTimeout(function () {
      v.innerHTML = "&#xf253;";
    }, 2000);

  })
  
}
hourglass();
setInterval(hourglass, 3000);




// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = `
  <table style = padding:5px>
  <tr>
    <td><h3 style = color:aqua;  font-size: 100px >${days}</h3></td>  <td style = color:aqua ><h3>${hours}</h3></td>   
    <td style = color:aqua ><h3>${minutes}</h3></td> <td style = color:aqua ><h3>${seconds}</h3></td>
    </tr>
    <tr>
<td style = padding:5px ><h3> DAYES </h3> </td> <td style = padding:5px ><h3>HOURS</h3></td> <td style = padding:5px><h3> MINUTES </h3></td>  <td style = padding:5px><h3> SECONDS </h3><td>
    </tr>
    
    </table>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);







