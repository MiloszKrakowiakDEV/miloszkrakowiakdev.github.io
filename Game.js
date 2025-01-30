class Game{
    constructor(name, path, icon) {
        this.name = name;
        this.path = path;
        this.icon = icon;
    }
    run_game(){
        console.log("test")
    }
}

window.Game = Game