var urlArray = [
    "https://www.google.com",
    "https://www.yahoo.com",
    "https://www.stackoverflow.com"
];

function randomUrl() {
    var randomNumber = Math.floor(Math.random() * urlArray.length);
    var newUrl = urlArray[randomNumber];
    window.location.href = newUrl;
    /* document.body.innerHTML += "<br>open this link: " + newUrl; */
}