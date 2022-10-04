import characterData from './data.js'
import Character from './Character.js'


function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
    if (orc.health == 0 || wizard == 0){
        endGame()
    }
}

function endGame() {
    if (orc.health === 0 && wizard === 0) {
        console.log("You killed each other! There is no victor")
    } else if (orc.health == 0) {
        console.log('You are victorious!')
    } else {
        console.log('You are dead!')
    }
}


function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener('click', attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()