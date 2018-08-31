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

      var desc = results[i].description;
      var title = results[i].title;
      var articleURL = results[i].url;
      var imgURL = results[i].urlToImage;

      console.log("test: " + desc);
      console.log("test: " + title);
      console.log("test: " + imgURL);

      newDiv = $("<div>").addClass("article");
      newTitle = $("<h4>");
      newTitle.text(title);

      var linkArticle = $("<a>")
        .attr("href", articleURL)
        .attr("target", "_blank");

      var imgDiv = $("<img>")
        .attr({
          src: imgURL,
          alt: title,
          height: "300px",
          width: "400px"
        })
        .addClass("article-image");

      var linkImage = linkArticle.append(imgDiv);

      newDiv.append(newTitle);
      newDiv.append(linkImage);

      $("#article-row").append(newDiv);
    }
  });
});
