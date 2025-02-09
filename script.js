function openBox() {
    let chocoBox = document.getElementById("chocoBox");
    let loveMessage = document.getElementById("loveMessage");

    chocoBox.src = "assets/box-open.png";  // Change image to open box
    loveMessage.style.display = "block";  // Show hidden message
}

function shareLove() {
    alert("Happy Chocolate Day, sweetheart! 💕");
}
