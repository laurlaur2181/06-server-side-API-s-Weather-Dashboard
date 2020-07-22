var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch(api.openweathermap.org/data/2.5/forecast?q=+'inputValue.value+'&appid={fd747eb387aaf6d634e26af6910a9cdc)
        .then(response => response.json())
        .then(data => console.log(data))
    
    .catch(err => alert("Wrong City Name!"))
}
