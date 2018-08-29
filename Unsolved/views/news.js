$(document).ready(function() {
  var QueryURL =
    "https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=c9fa72dafb6c489b8638928ad9262ac0";

  $.ajax({
    url: QueryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.articles;
    console.log(results);

    for (i = 0; i < results.length; i++) {
      console.log("---------");
      var auth = results[i].author;

      var desc = results[i].description;
      var src = results[i].source.name;
      var title = results[i].title;
      var articleURL = results[i].url;
      var imgURL = results[i].urlToImage;

      console.log("test" + auth);
      var titleDiv = $("<div>").text("Title: " + title);
      var authDiv = $("<div>").text("Author: " + auth);
      var descDiv = $("<div>").text(desc);

      var sourceDiv = $("<div>").text(src);
      //Rie's comment : I added attr("target","_blank") to open an article in a new tab.
      var linkDiv = $("<a>")
        .attr("href", articleURL)
        .attr("target", "_blank");

      var imgDiv = $("<img>").attr({
        src: imgURL,
        alt: title,
        width: "55%"
      });
    }

    //$(linkDiv).text(title);
    var monkDiv = linkDiv.append(imgDiv);

    $("#articleDiv").prepend(titleDiv);
    $("#articleDiv").prepend(monkDiv);
    $("#articleDiv").append("<br>");
  });
});
