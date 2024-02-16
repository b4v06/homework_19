// Task 1
alert("You wanna play a game? \n \n The rules are simple: \n 1. I am going to choose a number from 1 to 10 \n 2. You are going to try to guess the number that I have chosen (you have 1 try) \n 3. If you guess correctly - you win, if you guess incorrectly - you lose \n \n (Yeah, I know that odds are against you, but you know: house always wins)")
let youPlay = confirm("So, are we playing?") //confirming if User wants to play
if (youPlay === true) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = prompt("I've chosen the number, try to guess it:"); //checking if User has written a number or not
    if (isNaN(userGuess) === false) {
        if (Number(userGuess) === randomNumber)
        {
            alert("Congratulations! You've guessed my number! \n \n (But I am gonna win next time!)"); //He will most certainly win
            alert("Thank for playing anyway!");
        } else {
            alert("YOU ARE WRONG! HAHAHHAHA \n \n My number was: " + randomNumber + "\n \n Maybe next time!"); //Just to but it in
            alert("Thank for playing anyway!");
        }
    } else {
        alert("You sly fox! You ought to write the number!");
    }
}
if (youPlay === false) {
    alert("You are no fun!");
}