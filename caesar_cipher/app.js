const readlineSync = require('readline-sync');
let input = readlineSync.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readlineSync.question('How many letters would you like to shift? '))

function caesarCipher (){
    let newArray = [];
    let phrase = input
    let number = shift
    for(let i = 0; i < phrase.length; i++){
        if(phrase[i] === ' '){
            newArray.push(phrase[i])
        }else{
            let secretCode = phrase.charCodeAt(i) + number;
            while (secretCode > 122){
                secretCode = (secretCode - 122) + 96;
            }
            newArray.push(String.fromCharCode(secretCode))
        }
    }
    console.log(newArray.join(''))
}

caesarCipher()