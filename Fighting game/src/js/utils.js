function rectangularCollision({rectngle1, rectangle2}) {
    return (
        rectngle1.attackbox.position.y + rectngle1.attackbox.height >= 
            rectangle2.position.y &&
        rectngle1.attackbox.position.x <= 
            rectangle2.position.x + rectangle2.width &&
        rectngle1.attackbox.position.x + rectngle1.attackbox.width >= 
            rectangle2.position.x &&
        rectngle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function determineWinner({player, enemy, timerId}){
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health){
        document.querySelector('#displayText').innerHTML = 'Tie'
    }else if (player.health > enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    }else if (player.health < enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
}

let timer = 60
let timerId
function decreaseTimer(){
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0){
        determineWinner({player, enemy})
    }

}