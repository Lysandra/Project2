$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/userdata").then(function(data) {
    $(".member-name").text(data.firstname);
  });
});
