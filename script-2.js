// Task 2
let ending;
let youPlay = confirm("Story full of adventures, knights, princesses, dragons and battles is waiting for you! Are you ready to embark on this journey?") //Starting point
if (youPlay === true) {
    // Chapter 1
    alert("In a kingdom where legends come to life, young squire Luke dreams of becoming a knight. He serves Sir Robert, a knight who believes that honor is the highest virtue.");
    let userChoice = prompt("Tutorial: enter the number that corresponds to Luke's choice (any other response will result in Luke failing his journey and me failing this homework) \n \n Sir Robert sets Luke a test that will determine his fate: \n 1. Go to the forest. \n 2. Go through the village \n 3. Go to the dragon\'s castle");
    // Route 1
    // Forest
    if (Number(userChoice) === 1) {
        let userChoice = prompt("Luke meets a sorceress who offers a potion of power in exchange for a promise. \n 1. Take the potion \n 2. Refuse");
        if (Number(userChoice) === 1) {
            alert("Luke gains supernatural power, but remains in debt to the sorceress.");
            let userChoice = prompt("After returning from his travels, Luke is summoned to a tournament. \n 1. Fighting for honor \n 2. Helping another participant \n 3. Refusing to fight")
            if (Number(userChoice) === 1) {
                alert("Luke demonstrates his skills to gain respect.");
            } else if (Number(userChoice) === 2) {
                alert("Luke helps a wounded knight by showing his heart.");
            } else if (Number(userChoice) === 3) {
                alert("Luke refuses to fight, claiming that a true knight knows when not to fight.");
                ending = 8;
            } 
            else {
                alert("Luke has tripped over a stone and died. GG!")
            }
        } else if (Number(userChoice) === 2) {
            alert("Luke chooses the honest path, refusing easy success.");
            let userChoice = prompt("After returning from his travels, Luke is summoned to a tournament. \n 1. Fighting for honor \n 2. Helping another participant \n 3. Refusing to fight")
            if (Number(userChoice) === 1) {
                alert("Luke demonstrates his skills to gain respect.");
                ending = 1;
            } else if (Number(userChoice) === 2) {
                alert("Luke helps a wounded knight by showing his heart.");
                ending = 6;
            } else if (Number(userChoice) === 3) {
                alert("Luke refuses to fight, claiming that a true knight knows when not to fight.");
            } 
            else {
                alert("Luke has tripped over a stone and died. GG!")
            }
        } else {
            alert("Luke has tripped over a stone and died. GG!")
        }
    // Route 2
    // Village
    } else if (Number(userChoice) === 2) {
        let userChoice = prompt("Luke helps the villagers who are suffering at the hands of robbers. \n 1. Help by force \n 2. Find a peaceful solution");
        if (Number(userChoice) === 1) {
            alert("Luke uses force to protect the villagers, but is injured.");
        } else if (Number(userChoice) === 2) {
            alert("Luke resolves conflicts with peace, earning respect as a leader.");
            let userChoice = prompt("After returning from his travels, Luke is summoned to a tournament. \n 1. Fighting for honor \n 2. Helping another participant \n 3. Refusing to fight")
            if (Number(userChoice) === 1) {
                alert("Luke demonstrates his skills to gain respect.");
            } else if (Number(userChoice) === 2) {
                alert("Luke helps a wounded knight by showing his heart.");
                ending = 7;
            } else if (Number(userChoice) === 3) {
                alert("Luke refuses to fight, claiming that a true knight knows when not to fight.");
                ending = 2;
            } 
            else {
                alert("Luke has tripped over a stone and died. GG!")
            }
        } else {
            alert("Luke has tripped over a stone and died. GG!")
        }
    // Route 3
    // Dragon
    } else if (Number(userChoice) === 3) {
        let userChoice = prompt("Luke decides to test himself by challenging the dragon to a fight. \n 1. The battle with the dragon \n 2. An attempt to negotiate");
        if (Number(userChoice) === 1) {
            alert("Luke dies, but his actions are considered heroic.");
            ending = 4;
        } else if (Number(userChoice) === 2) {
            alert("Luke learns that the dragon does not want to fight, and they reach peace.");
            let userChoice = prompt("Impressed by Luke's actions, the king offers him one last task. \n 1. To protect the kingdom: \n 2. Search for the missing relic");
            if (Number(userChoice) === 1) {
                alert("Luke leads troops against the enemy, demonstrating his bravery.");
                endind = 5;
            } else if (Number(userChoice) === 2) {
                alert("Luke sets out to find an ancient relic that can save the kingdom.");
                ending = 3;
            } 
            else {
                alert("Luke has tripped over a stone and died. GG!")
            }

        } else {
            alert("Luke has tripped over a stone and died. GG!")
        }
    } else {
        alert("Luke has tripped over a stone and died. GG!")
    }
}
if (youPlay === false) {
    alert("Oh... And so they lived happily ever after");
}
if (ending === 1) {
alert("Endind 1: \n \n Luke becomes a knight known for his honesty and courage, choosing to serve the kingdom.")
} else if (ending === 2) {
    alert("Endind 2: \n \n Luke leaves the tournament, becoming a defender of the villagers and an example to others that true strength lies in wisdom and compassion.")
} else if (ending === 3) {
    alert("Endind 3: \n \n Luke proves that it is possible to find peace even with dragons, and save the kingdom without violence, becoming a legend.")
} else if (ending === 4) {
    alert("Endind 4: \n \n Luke dies, but his name lives forever in legend as a symbol of invincible courage and sacrifice.")
} else if (ending === 5) {
    alert("Endind 5: \n \n Luke proves himself as a great commander and becomes a well-known general")
} else if (ending === 6) {
    alert("Endind 6: \n \n Luke shows that he is a great and merciful warrior without any potions, so the princess chose him as her lover for winning the tournament")
} else if (ending === 7) {
    alert("Endind 7: \n \n Luke proves to be a defender of common people and a great knight, which made him a hero of many stories sung by bards")
} else if (ending === 8) {
    alert("Endind 8: \n \n Turns out that Luke is just a cheater and a coward, which is pretty sad")
}
 else {
    alert("The end!")
}