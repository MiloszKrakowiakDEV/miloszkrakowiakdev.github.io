class Game{
    constructor(name, path, icon) {
        this.name = name;
        this.path = path;
        this.icon = icon;
    }
    run_game(){
        localStorage.setItem("current_game",item.path)
        location.replace("play.html")
    }
}

window.Game = Game