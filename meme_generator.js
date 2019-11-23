// Load the Dom
document.addEventListener("DOMContentLoaded", function() {

// Define some selectors on the page
var submitButton = document.getElementById('submit-button');
var memeField = document.getElementById('meme-field');
var memeForm = document.getElementById('meme-form')

// Add meme function
function addMeme(){
    event.preventDefault();
    let newMeme = document.createElement("div");
    newMeme.className = 'meme';
    memeField.appendChild(newMeme);

    let memeImageContainer = document.createElement("div");
    newMeme.appendChild(memeImageContainer);
    memeImageContainer.className ='meme-image-container';

    let memeImage = document.createElement("img");
    memeImageContainer.appendChild(memeImage);
    memeImage.className = 'meme-image'
    memeImage.src = document.getElementById("meme-image").value;

    let removeText = document.createElement("div");
    memeImageContainer.appendChild(removeText);
    removeText.className = 'meme-text';
    removeText.id = 'remove-text';
    removeText.innerHTML = "X";

    let topText = document.createElement("div");
    memeImageContainer.appendChild(topText);
    topText.className = 'meme-text'
    topText.id = 'top-text'
    topText.innerHTML = document.getElementById("top-text").value;

    let bottomText = document.createElement("div");
    memeImageContainer.appendChild(bottomText);
    bottomText.className = 'meme-text'
    bottomText.id = 'bottom-text'
    bottomText.innerHTML = document.getElementById("bottom-text").value;

    memeForm.reset();
}

//function remove meme from page
function removeMeme(e){
    if (e.target && e.target.className == 'meme-image'){
        e.target.parentNode.parentNode.remove();
    }
    return false;
}
    
//Add meme to page
submitButton.addEventListener("click", addMeme);

//Remove meme from page
memeField.addEventListener("click", removeMeme);

});
