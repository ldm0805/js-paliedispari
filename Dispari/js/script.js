
let button = document.getElementById('save_data');
//3 Condizioni per il calcolo del prezzo del biglietto in base ai km ed all'età
button.addEventListener('click', function(){

    let user_choose = document.getElementById('choose_id').value;
    let number_user = parseInt(document.getElementById('number_id').value);
    
    console.log(number_user)
    
    
    function generateNumber(min,max){
       
        let randomNumber= Math.floor(Math.random() * (max - min + 1) + min )
        return randomNumber
        
    }
    let min = 1
    let max = 5
    
    let number = generateNumber(min,max);
    console.log(number)
    
    let sum = number_user + number
    console.log(sum)
    
    
    if(sum % 2 === 0 && user_choose === 'pari'){
        document.getElementById('result_game').innerHTML ='Hai vinto.'
    }
    
    else if(sum % 2 !== 0 && user_choose === 'dispari'){
        document.getElementById('result_game').innerHTML ='Hai vinto.'
    }
    
    else {
        document.getElementById('result_game').innerHTML ='Hai perso.'
    }

})

