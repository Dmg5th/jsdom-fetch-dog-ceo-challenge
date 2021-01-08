const imageContainer = document.querySelector("#dog-image-container");
const breedContainer = document.querySelector("#dog-breeds");
const dropdown = document.querySelector("#breed-dropdown")

let breeds = []


function displayDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => renderImages(json))
}

function renderImages(dogs) {
    const dogImages = dogs.message
    dogImages.forEach(dog => {
    createImg(dog)
});
}

function createImg(image){
    const img = document.createElement("img")
    img.src = image
    imageContainer.appendChild(img)
}

function getBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => listBreeds(json))
}

function listBreeds(breedsObj){
  breeds = Object.keys(breedsObj.message)
  breeds.forEach(breed => {
    createBreedList(breed)
  });
}
  
function createBreedList(breeds){
  const li = document.createElement("li")
  li.innerText = breeds
  li.style.cursor = 'pointer';
  breedContainer.appendChild(li)
  li.addEventListener("click", changeColor)
  
}
function changeColor(event){
  if (event.target.style.color === "pink") {
    event.target.style.color = "black"
  } else {
    event.target.style.color = "pink"
  }
}

// the event listener to the dropdown
dropdown.addEventListener("change", function(e){
  const letter = e.target.value

  const filteredBreeds = breeds.filter(function(breed) {
    return breed.startsWith(letter)
  })

  breedContainer.innerText = ""

  createBreedList(filteredBreeds);
  
})














getBreeds();
displayDogs();

















//  function loadImages() {
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//   fetch(imgUrl)
//     .then(res=> res.json())
//     .then(results => {
//       results.message.forEach(image => addImage(image))
//     });
// }

// function addImage(dogPicUrl) {
//   let container = document.querySelector('#dog-image-container');
//   let newImageEl = document.createElement('img');
//   newImageEl.src = dogPicUrl;
//   container.appendChild(newImageEl);
// }

