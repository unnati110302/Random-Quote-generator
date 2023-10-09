document.addEventListener("DOMContentLoaded", function(){

    const arr = {
        ' "All our dreams can come true, if we have the courage to pursue them."' : '—Walt Disney',
        
        '"The secret of getting ahead is getting started."' : '—Mark Twain',

        '"Success is not a good teacher, failure makes you humble.' :'Shah Rukh Khan',

        '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”' : '—Mary Kay Ash',

        '“The best time to plant a tree was 20 years ago. The second best time is now.”': '―Chinese Proverb',

        '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”' : '―Helen Keller',
        
        '“It’s no use going back to yesterday, because I was a different person then.”' : '―Lewis Carroll',

        '"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.':'Rabindranath Tagore',

        '"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.”' : '—William W. Purkey',

        '"Everything you can imagine is real.”':'―Pablo Picasso',

        '“Keep your eyes on the stars, and your feet on the ground.”' : '―Theodore Roosevelt',

    };

    const keysArray = Object.keys(arr);
    const quote = document.getElementById("saying");
    const author = document.getElementById("writer");
    const button = document.getElementById("btn");

    var i = 0;
    const n = keysArray.length;
    button.addEventListener("click", function(){
        var key = keysArray[i];
        quote.innerHTML = key;
        author.innerHTML = arr[key];
        i++;
        if(i==n){
            i = 0;
        }
    });
});