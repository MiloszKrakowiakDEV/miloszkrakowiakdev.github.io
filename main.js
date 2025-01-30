
let games = [
    new Game("Age of war 2", "gry/aow2/aow2.swf", "gry/aow2/aow2.webp"),
    new Game("The right mix", "gry/bartender/bartender.swf", "gry/bartender/bartender.jpg"),
    new Game("Head basketball", "gry/basketball/basketball.swf", "gry/basketball/basketball.webp"),
    new Game("Bloxorz", "gry/bloxorz/bloxorz.swf", "gry/bloxorz/bloxorz.jpg"),
    new Game("Bomb it 6", "gry/bombit6/bombit6.swf", "gry/bombit6/bombit6.jpg"),
    new Game("Bob snail 3", "gry/snail3/snail3.swf", "gry/snail3/snail3.jpg"),
    new Game("Bloons tower defense", "gry/btd1/btd1.swf", "gry/btd1/btd1.jpg"),
    new Game("Bubble shooter", "gry/bubbles/bubbles.swf", "gry/bubbles/bubbles.jpg"),
    new Game("Cactus McCoy", "gry/cactus/cactus.swf", "gry/cactus/cactus.jpg"),
    new Game("Cat vs Dog", "gry/catvsdog/catvsdog.swf", "gry/catvsdog/catvsdog.jpg"),
    new Game("Commando 2", "gry/commando2/commando2.swf", "gry/commando2/commando2.jpg"),
    new Game("Papa's hotdoggeria", "gry/hotdog/hotdog.swf", "gry/hotdog/hotdog.jpg"),
    new Game("Cubedroid saves the galaxy", "gry/cubedroid/cubedroid.swf", "gry/cubedroid/cubedroid.jpg"),
    new Game("Cure the bunny", "gry/curethebunny/curethebunny.swf", "gry/curethebunny/curethebunny.png"),
    new Game("Defend your nuts", "gry/defendyournuts/defendyournuts.swf", "gry/defendyournuts/defendyournuts.png"),
    new Game("Red ball 4", "gry/redball4/redball4.swf", "gry/redball4/redball4.png  "),
    new Game("Duck life 4", "gry/ducklife4/ducklife4.swf", "gry/ducklife4/ducklife4.jpg"),
    new Game("Fireboy and Watergirl in the Forest Temple", "gry/fbwgft/fbwgft.swf", "gry/fbwgft/fbwgft.jpg"),
    new Game("Bob snail 1", "gry/snail1/snail1.swf", "gry/snail1/snail1.png"),
    new Game("Head football", "gry/football/football.swf", "gry/football/football.jpg"),
    new Game("Frogger", "gry/frogger/frogger.swf", "gry/frogger/frogger.jpg"),
    new Game("Frogger", "gry/jacksmith/jacksmith.swf", "gry/jacksmith/jacksmith.jpg"),
    new Game("Grindcraft", "gry/grindcraft/grindcraft.swf", "gry/grindcraft/grindcraft.webp"),
    new Game("Papa's pizzeria", "gry/pizza/pizza.swf", "gry/pizza/pizza.jpg"),
    new Game("Cactus McCoy 2", "gry/cactus2/cactus2.swf", "gry/cactus2/cactus2.jpg"),
    new Game("Grow island", "gry/growisland/growisland.swf", "gry/growisland/growisland.png"),
    new Game("Handless millionaire", "gry/handless/handless.swf", "gry/handless/handless.png"),
    new Game("Papa Louie 3", "gry/louie3/louie3.swf", "gry/louie3/louie3.jpg"),
    new Game("Hobo", "gry/hobo/hobo.swf", "gry/hobo/hobo.jpg"),
    new Game("The impossible quiz", "gry/impossiblequiz/impossiblequiz.swf", "gry/impossiblequiz/impossiblequiz.png"),
    new Game("Learn to fly 2", "gry/learntofly2/learntofly2.swf", "gry/learntofly2/learntofly2.jpg"),
    new Game("Bad icecream", "gry/icecream/icecream.swf", "gry/icecream/icecream.jpg"),
    new Game("Papa's burgeria", "gry/burger/burger.swf", "gry/burger/burger.jpg"),
    new Game("Pheus and Mor", "gry/pheusandmor/pheusandmor.swf", "gry/pheusandmor/pheusandmor.jpg"),
    new Game("Heroica: Fortaan", "gry/heroica/Launcher.swf", "gry/heroica/heroica.webp"),
    new Game("Bob snail 2", "gry/snail2/snail2.swf", "gry/snail2/snail2.jpg"),
    new Game("Rollercoaster creator", "gry/coaster/coaster.swf", "gry/coaster/coaster.jpg"),
    new Game("QWOP", "gry/qwop/qwop.swf", "gry/qwop/qwop.jpg"),
    new Game("Super Stacker 2", "gry/ss2/ss2.swf", "gry/ss2/ss2.webp"),
    new Game("Swords and Sandals 2", "gry/swordsandsandals2/swordsandsandals2.swf", "gry/swordsandsandals2/swordsandsandals2.webp"),
    new Game("The Binding of Isaac: Wrath of the lamb", "gry/tboi/tboi.swf", "gry/tboi/tboi.jpg"),
    new Game("Truck loader 4", "gry/truckloader4/truckloader4.swf", "gry/truckloader4/truckloader4.jpg"),
    new Game("Zombotron", "gry/zombotron/zombotron.swf", "gry/zombotron/zombotron.jpg"),
    new Game("Vertical drop heroes", "gry/vdh/vdh.swf", "gry/vdh/vdh.jpg"),
    new Game("Head volleyball", "gry/volleyball/volleyball.swf", "gry/volleyball/volleyball.jpg"),
    new Game("World's hardest game", "gry/whg/whg.swf", "gry/whg/whg.jpg"),
    new Game("Fancy pants adventure", "gry/fancypants/fancypants.swf", "gry/fancypants/fancypants.jpg"),
    new Game("Super D", "gry/superd/superd.swf", "gry/superd/superd.jpg")
];
localStorage.setItem("games",games)

let generated = false; 
let search_bar = document.getElementById("search")
let interval2 = window.setInterval(function(){
    if(search_bar.value==""){
        let games_list = document.getElementById("games_list")
            games_list.innerHTML=""
        games.forEach(function (item,index){
            
            games_list = document.getElementById("games_list")
            let game = document.createElement("p")
            let icon = document.createElement("img")
            icon.src=item.icon
            icon.alt=item.name
            game.style.float="left"
            game.classList.add("game_container")
            icon.classList.add("game")
            let description = document.createElement("span");
            game.appendChild(icon)
            console.log(index)
            if(index%5==0) {
                game.style.clear="both"
            }
            game.onclick=function(){
                localStorage.setItem("current_game",item.path)
                location.replace("play.html")
            }
            games_list.appendChild(game)
            
        }
    )
    generated=true 
    }
    else if(search_bar.value!=""){
            let games_list = document.getElementById("games_list")
            games_list.innerHTML=""
            let i =0
            games.forEach(function (item,index){
                if(item.name.toLowerCase().includes(search_bar.value)){
                let game = document.createElement("p")
                let icon = document.createElement("img")
                icon.src=item.icon
                icon.alt=item.name
                game.style.float="left"
                game.classList.add("game_container")
                icon.classList.add("game")
                let description = document.createElement("span");
                game.appendChild(icon)

                if(i%5==0) {
                    game.style.clear="both"
                }
                game.onclick=function(){
                    localStorage.setItem("current_game",item.path)
                    location.replace("play.html")
                }
                games_list.appendChild(game)
                i++}  
                
            }
            
        ) 
            
        }
},200)

