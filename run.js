let games = localStorage.getItem("games")
document.title=localStorage.getItem("name")
let icon_el = document.createElement("link")
document.getElementsByTagName("head")[0].appendChild(icon_el)
let icon = document.getElementsByTagName("link")[1]
icon.type="x-icon"
icon.rel="shortcut icon"
icon.href=localStorage.getItem("icon")
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
"splashScreen": true,
"backgroundColor":"#190ae9",
"letterbox":"on",
"contextMenu":"off",
"forcealign":true,
"frameRate":30,
"allowFullscreen":true
}
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
