function saveSess() {
    // console.log(listChartText.value);
    localStorage.setItem("listChartSess", listChartText.value);

    if (listChartText.value == null) {
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
    } else {
        let arrList = listChartText.value.split("\n");
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
            "watchlist": arrList,
            "save_image": false,
            "container_id": "chart"
        });

    }
    closeMenu();
}