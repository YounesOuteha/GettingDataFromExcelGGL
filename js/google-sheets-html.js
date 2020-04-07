

google.load('visualization', '1', {packages: ['table']});

var visualization;

function drawVisualization() {

    /* Add your Google Spreadsheet link instead of mine! */
/* https://docs.google.com/spreadsheets/d/1aFFwrsRmdt5Lv-c2eoWzWfsJ1N5Fiqvzk1Bb6ZhZUsE/edit?usp=sharing */

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1aFFwrsRmdt5Lv-c2eoWzWfsJ1N5Fiqvzk1Bb6ZhZUsE/edit?usp=sharing');

    /* Change table head (titles) here or add more column! */
    query.setQuery('SELECT A, B, C, D label A "Date", B "Name", C "Age", D "City"');

    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    // if there is a Error
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);

/********************************************************** */
/* PART 2: CHART JS */

$.getJSON("https://spreadsheets.google.com/feeds/list/17t52XqmKkfo8js1gVzy2penw71c6jBAklofqDydMzg0/od6/public/values?alt=json", function (data) {

    var sheetData = data.feed.entry;

    var i;
    for (i = 0; i < sheetData.length; i++) {

      var Date = data.feed.entry[i]['gsx$timestamp']['$t'];
      var Name = data.feed.entry[i]['gsx$name']['$t'];
      var Message = data.feed.entry[i]['gsx$message']['$t'];
      var Note = data.feed.entry[i]['gsx$note']['$t'];

      document.getElementById('Yotable').innerHTML += ('<tr>'+'<td>'+Date+'</td>'+'<td>'+Name+'</td>'+'<td>'+Message+'</td>'+'<td>'+Note+'</td>'+'</tr>');

    }
  });

