let games = localStorage.getItem("games")
window.RufflePlayer = window.RufflePlayer || {};
    window.addEventListener("load", (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("game_window");
        container.appendChild(player);
        player.ruffle().load(localStorage.getItem("current_game"));
        player.style.width = "100%";
        player.style.height = "800px";
        container.style.marginLeft="120%"
        container.style.marginLeft="10%"
    });
