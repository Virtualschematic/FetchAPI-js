

$(document).ready(() => {
    getApiData();
});

function generateListElements(data) {
    let number = Intl.NumberFormat("en-US");
    $('#coinList').html(""); //clears list
    $('#coinList').append(
        $('<li class="list-group-item"></li>').text("Name: " + data.name),
        $('<li class="list-group-item"></li>').html(
            `<coingecko-coin-price-chart-widget  coin-id="${data.name}" currency="nzd" height="300" locale="en" background-color="#1A1717"></coingecko-coin-price-chart-widget>`),
        $('<li class="list-group-item"></li>').html(
            `<coingecko-coin-market-ticker-list-widget  coin-id="${data.name}" currency="nzd" height="300" locale="en" background-color="#1A1717"></coingecko-coin-market-ticker-list-widget>`),
        $('<li class="list-group-item"></li>').text("Blocktime: " +
            data.block_time_in_minutes + " minutes"),
        $('<li class="list-group-item"></li>').text("Algorithm: " +
            data.hashing_algorithm),
        $('<li class="list-group-item"></li>').html("Description: " +
            data.description.en),
        $('<li class="list-group-item"></li>').html("Homepage: " +
            data.links.homepage[0].link(data.links.homepage[0])),
        $('<li class="list-group-item"></li>').text("Genesis: " + data.genesis_date),
        $('<li class="list-group-item"></li>').text("All Time High: " + "$" +
            number.format(data.market_data.ath.usd)),
        $('<li class="text-danger list-group-item"></li>').text("From ATH: " +
            Number(data.market_data.ath_change_percentage.usd).toFixed(2) + "%"),
    );
};

function getApiData() {
    fetch(coin)
        .then(res => {
            res.json().then(res => {
                generateListElements(res);
            })
        })
        .catch(err => {
            console.log(err);
        });
};

