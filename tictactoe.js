const prompt = require('prompt');

let tictac1 = ['1st','2nd','3rd']
let tictac2 = ['4th','5th','6th']
let tictac3 = ['7th','8th','9th']
console.log('It is a tic tac toe game and there are 9 places to place your mark, its will go turn by turn , and the places are as follows :');
console.log(tictac1);
console.log(tictac2);
console.log(tictac3);

// function firstplayer() {

    console.log('First player turn');

    

prompt.start();

prompt.get(['firstplayerinput'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  firstplayerinput: ' + result.firstplayerinput);
    
});

function onErr(err) {
    console.log(err);
    return 1;
// }

// firstplayer();

}