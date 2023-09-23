const content = document.getElementById("screen");
const title = document.getElementById("title");

const getQuote = () => {
    title.innerHTML = '<h2>Quote For The Day</h2>';
    var op_quote = '<i class="fa fa-quote-left" aria-hidden="true"></i>';
    var cl_quote = '<i class="fa fa-quote-right" aria-hidden="true"></i>';
    // Fetching quote
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        content.innerHTML = op_quote + " " + result.content + " " + cl_quote;
    })
    // content.innerHTML = op_quote + " " + quote + " " + cl_quote;
}

const getJoke = () => {
    title.innerHTML = '<h2>Joke For The Day</h2>';
    var op_quote = '<i class="fa fa-quote-left" aria-hidden="true"></i>';
    var cl_quote = '<i class="fa fa-quote-right" aria-hidden="true"></i>';
    fetch("https://official-joke-api.appspot.com/jokes/programming/random").then(res => res.json()).then(result => {
        console.log(result)
        content.innerHTML = op_quote + " " + result[0].setup + "\n" + result[0].punchline + " " + cl_quote;
    })
}

const getFact = () => {
    title.innerHTML = '<h2>Fact For The Day</h2>';
    var op_quote = '<i class="fa fa-quote-left" aria-hidden="true"></i>';
    var cl_quote = '<i class="fa fa-quote-right" aria-hidden="true"></i>';
    var limit = 1;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
        headers: { 'X-Api-Key': 'CdDjRnFJ8TIjwbqrqrkcfQ==r8luRhBBdHny16IR' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
            content.innerHTML = op_quote + " " + result[0].fact + " " + cl_quote;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

const getPic = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    title.innerHTML = '<h2>Pic For The Day</h2>';
    content.innerHTML = `<img class="randomPic" src="https://source.unsplash.com/random/300x200?sig=${Math.random()}"></img>`;
}

const redirectToBE = () => {
    const vid = 
    ["https://www.youtube.com/watch?v=F28MGLlpP90", 
    "https://www.youtube.com/watch?v=7Ep5mKuRmAA", 
    "https://www.youtube.com/watch?v=JoDKbXEUrvQ",
    "https://www.youtube.com/watch?v=3BPIBxe6mVs",
    "https://www.youtube.com/watch?v=inpok4MKVLM"];

    const url = vid[Math.floor(Math.random() * 5)];
    window.open(url, "_blank");
    // location.replace(url)
}

const redirectToEX = () => {
    const vid = 
    ["https://www.youtube.com/watch?v=Ev6yE55kYGw", 
    "https://www.youtube.com/watch?v=IT94xC35u6k", 
    "https://www.youtube.com/watch?v=149Iac5fmoE",
    "https://www.youtube.com/watch?v=FdyhENXyIQ4",
    "https://www.youtube.com/watch?v=r17USrUBLY4"];

    const url = vid[Math.floor(Math.random() * 5)];
    window.open(url, "_blank");
    // location.replace(url)
}

const getBook = () => {
    title.innerHTML = '<h2>Book For The Day</h2>';
    console.log('New book');
    var points = 17; //calculate points from the form filled

    var op_quote = '<i class="fa fa-quote-left" aria-hidden="true"></i>';
    var cl_quote = '<i class="fa fa-quote-right" aria-hidden="true"></i>';

    const books = [
        ["The Guernsey Literary and Potato Peel Pie Society", 
        "The Secret Garden", 
        "A Man Called Ove",
        "Eleanor Oliphant Is Completely Fine",
        "The Little Prince"],
        ["To Kill a Mockingbird", 
        "1984", 
        "The Great Gatsby",
        "The Lord of the Rings",
        "The Catcher in the Rye"],
        ["The Girl with the Dragon Tattoo" , 
        "Gone Girl", 
        "The Silent Patient",
        "The Da Vinci Code",
        "The Woman in the Window"]
    ]

    if(points < 50) //feel good books
    {
        content.innerHTML = op_quote + " " + books[0][Math.floor(Math.random() * 5)] + " " + cl_quote;
    }

    else if(points > 50 && points < 80)//fiction books
    {
        content.innerHTML = op_quote + " " + books[1][Math.floor(Math.random() * 5)] + " " + cl_quote;
    }

    else if(points > 80)//thriller books
    {
        content.innerHTML = op_quote + " " + books[2][Math.floor(Math.random() * 5)] + " " + cl_quote;
    }
}

const resetButton = () => {
    title.innerHTML = "<h2>Activities</h2>"
    content.innerHTML = "<h2>Press a button</h2>"
}