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

      // var descDiv = $("<div>").text(desc);

      // $(".article-desc").append(descDiv);

      // var titleDiv = $("<div>").text("Title: " + title);
      //   var authDiv = $("<div>").text("Author: " + auth);
      //   var descP = $("<p>").text(desc);

      //   var sourceDiv = $("<div>").text(src);
      //   //Rie's comment : I added attr("target","_blank") to open an article in a new tab.
      //   var linkDiv = $("<a>")
      //     .attr("href", articleURL)
      //     .attr("target", "_blank");

      var imgDiv = $("<img>")
        .attr({
          src: imgURL,
          alt: title,
          width: "55%"
        })
        .addClass("article-image");

      // //$(linkDiv).text(title);
      $(".media-body").append(imgDiv);

      $(".article-title").prepend(title);


      // $(".article-title").prepend(titleDiv);
      // $(".article-image").prepend(monkDiv);
      // $(".article-desc").append(desc);
    }
  });
});
