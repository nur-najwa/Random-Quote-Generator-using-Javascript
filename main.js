let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
    [
        '"We do not remember days, we remember moments." -Cesare Pavese',
        '"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less." -Marie Curie',
        '"The true secret of happiness lies in taking a genuine interest in all the details of daily life." -William Morris',
        '"Love is the flower you have got to let grow." -John Lennon',
    ];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})