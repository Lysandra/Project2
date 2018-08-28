$(document).ready(function() {

  var queryURL = "https://api.coingecko.com/api/v3/coins?order=market_cap_&per_page=15";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            console.log(response);


            var results = response;

            for (i = 0; i < results.length; i++) {

                var name = results[i].name;
                var idG = results[i].id;
                var symbol = results[i].symbol;
                var image = results[i].image.small;
                var currentPrice = results[i].market_data.current_price.usd;
                var hourChange = results[i].market_data.price_change_percentage_24h;

                var idDiv = $("<div>").text("ID: " + idG);
                var symbolDiv = $("<div>").text("Ticker: " + symbol.toUpperCase());
                var nameDiv = $("<div>").text("Name: " + name);
                var currentPriceDiv = $("<div>").text("Current Price: " + currentPrice + "USD");
                var hourChangeDiv = $("<div>").text("Change 24H: " + hourChange + "%");
                var imgDiv = $("<img>").attr("src", image);


                $("#testDiv01").append(imgDiv);
                $("#testDiv01").append(idDiv);
                $("#testDiv01").append(symbolDiv);
                $("#testDiv01").append(nameDiv);
                $("#testDiv01").append(currentPriceDiv);
                $("#testDiv01").append(hourChangeDiv);

                var a = $("<img>");

                a.addClass("crypto-btn");
                a.addClass("img-rounded");
                a.addClass("imagestyle");
                a.attr("src", image);
                a.attr("id", idG);


                $("#crytoDiv").append(a);

            }
        })

});
