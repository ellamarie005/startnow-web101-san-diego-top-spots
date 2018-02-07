$(document).ready(function() {
// write your code here
$.getJSON('data.json', function (data){
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].name + "</td>");
        tr.append("<td>" + data[i].description + "</td>");
        tr.append("<td>" + "<a href='https://www.google.com/maps?q=" + data[i].location + "'>" +'Open Link in Google Maps' +"</a>" + "</td>");
        $('table').append(tr);
    }
})

});
