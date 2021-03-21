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
    "container_id": "chart"
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit1') {
        let bgmenuPage = document.querySelector('.bgmenu-page');
        bgmenuPage.classList.add("show");
    }
});

function closeMenu() {
    let bgmenuPage = document.querySelector('.bgmenu-page');
    bgmenuPage.classList.remove("show");
}