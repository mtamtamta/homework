let surname = document.getElementById('3');
let lang1 = true;

surname.addEventListener('click', function (){
    if (lang1){
        surname.innerText = "Mullagalin";
    }else{
        surname.innerText = "Муллагалин";
    }
    lang1 = !lang1;
});

let name = document.getElementById('4');
let lang2 = true;

name.addEventListener('click', function (){
    if (lang2){
        name.innerText = "Timur";
    }else{
        name.innerText = "Тимур";
    }
    lang2 = !lang2;
})

let otchestvo = document.getElementById('5');
let lang3 = true;

otchestvo.addEventListener('click', function (){
    if (lang3){
        otchestvo.innerText = "Aidarovich";
    }else{
        otchestvo.innerText = "Айдарович";
    }
    lang3 = !lang3;

})

let data = document.getElementById('6');
let lang4 = true;

data.addEventListener('click', function (){
    if (lang4){
        data.innerText = "two thousand and five";
    }else{
        data.innerText = "2005";
    }
    lang4 = !lang4;
})