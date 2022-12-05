let user_choose= prompt('Scegli se vuoi giocare con pari o dispari')
let number_user= parseInt(prompt('Inserire un numero da 1 a 5'))
console.log(number_user)


function generateNumber(min,max){
   
    let randomNumber= Math.floor(Math.random() * (max - min + 1) + min )
    return randomNumber
    
}
let min = 1
let max = 5

let number= generateNumber(min,max);
console.log(number)

let sum = number_user + number
console.log(sum)

if(number_user == number){
    alert('Pareggio')
}

else if(sum % 2 === 0 && user_choose === 'pari'){
    alert('Hai vinto')
}

else if(sum % 2 !== 0 && user_choose === 'dispari'){
    alert('Hai vinto')
}

else {
    alert('Hai perso')
}