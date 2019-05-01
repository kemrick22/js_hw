    // from data.js
    var tableData = data;
    // Get a reference to the table body
    var sightings = d3.select("tbody");

tableData.forEach(function(a) {
    var row = sightings.append("tr");
    Object.entries(a).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the sightings  object
        var cell = sightings.append("td");
        cell.text(value);
    });
});

var filter = d3.select("#filter-btn");


filter.on("click", function() {
    console.log("a")
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);
    sightings.html("");
    // sighting values
    filteredData.forEach(function(a) {
        
        var row = sightings.append("tr");
        Object.entries(a).forEach(function([key, value]) {
            // Append a cell to the row for each value
            // in the sightings  object
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});

