var urlArray = [
    "https://t.maze.co/99868196",
    "https://t.maze.co/100029604"
];

function randomUrl() {
    var randomNumber = Math.floor(Math.random() * urlArray.length);
    var newUrl = urlArray[randomNumber];
    window.location.href = newUrl;
    /* document.body.innerHTML += "<br>open this link: " + newUrl; */
}