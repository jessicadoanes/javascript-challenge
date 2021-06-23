// from data.js
var tableData = data;

//Make references
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = inputElement.property("city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSighting => {
        var row = $tbody.append("tr"),
        columns.forEach(column => row.append("td").text(ufoSighting[column])
        )
    });
}

addData(tableData);



button.on("click", () => {
    d3.event.preventDefault();

var inputDate = inputDate.property("value").trim();


var filterData = tableData.filter(tableData => tableData.datatime === inputDate);

$tbody.html("");

let response = {
    filterDate
}

if(response.filterDate.length ! == 0) {
    addData(filterDate);
}

else {
    $tbody.append("tr").append("td").text("Clear sky. Try another date.")
}

}))
// YOUR CODE HERE!
