const rock='rock';
const paper='paper';
const scissors = 'scissors';
let userInput, userChoice, computerChoice; //varibles 
//function getUserChoice that takes a single parameter userInput
getUserChoice = userInput => {
userInput=prompt('Input ur ch:');
userInput = userInput.toLowerCase();// function to make the userInput all lowercase
//check the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’
    if(userInput==rock){
        return userInput;
    }else if(userInput == paper){
        return paper;
    }else if(userInput == scissors){
        return scissors;
    }else{
        console.log('please try again')
        exit();
    }
}
//function random computer choise
getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)){
        case 0: return rock;
        break;
        case 1: return paper;
        break;
        case 2: return scissors;
        default:
        break; 
    }
}
//function compare the two choices played 
//return won, lost, or tied
determineWinner = (userChoice, computerChoice) =>{
    if(userChoice==computerChoice){
        console.log('game was tie');
    }else if(userChoice==paper&& (computerChoice==scissors||computerChoice==rock)){
            console.log('Computer winner');   
        
    }else if(userChoice==scissors&&computerChoice==rock)
    {
        console.log('computer winer');
    }else{
        console.log("user winer");
    }
    }

//determine who won
playGame = () => { 
    userChoice = getUserChoice(userInput);
    console.log(userChoice);
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    determineWinner(userChoice, computerChoice);
}
//calling function
playGame();
