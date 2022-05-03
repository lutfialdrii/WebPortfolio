const txtEleement = ['Guys!', 'di Website saya!'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count === txtEleement.length){
        count = 0;
    }
    currentTxt = txtEleement[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;
    
    setTimeout(ngetik, 400);

    if(words.length === currentTxt.length){
        count++;
        txtIndex = 0;
    }
})();