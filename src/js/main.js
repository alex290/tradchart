new TradingView.widget({
    "autosize": true,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "60",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "ru",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "hide_legend": true,
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "save_image": false,
    "container_id": "chart"
});





function openMenu() {
    let bgmenuPage = document.querySelector('.bgmenu-page');
    bgmenuPage.classList.add("show");
}

function closeMenu() {
    let bgmenuPage = document.querySelector('.bgmenu-page');
    bgmenuPage.classList.remove("show");
}

function gridChart() {

    let widthColl = document.getElementById('widthColl').value;
    let heightColl = document.getElementById('heightColl').value;

    var theme = document.getElementById("theme").value;

    let grid = widthColl * heightColl;

    let widthRes = 100 / widthColl;
    let heightRes = 100 / heightColl;

    // console.log(theme);

    var html = '';

    for (let index = 1; index <= grid; index++) {

        html = html + '<div id="chart' + index + '" class="chart_new" style="width: ' + widthRes + '%;  height: ' + heightRes + 'vh"></div>';
        let cont = document.querySelector('.tradingview-widget-container');
        cont.innerHTML = html;

    }

    for (let index = 1; index <= grid; index++) {
        new TradingView.widget({
            "autosize": true,
            "symbol": "BINANCE:BTCUSDT",
            "interval": "60",
            "timezone": "Etc/UTC",
            "theme": theme,
            "style": "1",
            "locale": "ru",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_legend": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "save_image": false,
            "container_id": "chart" + index
        });
    }

    closeMenu();

}