const imageContainer = document.querySelector("#dog-image-container");
const breedContainer = document.querySelector("#dog-breeds");
const breedDropdown = document.querySelector("#breed-dropdown");

let dogBreeds = []

function loadImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(json => iterateImages(json.message));
}

function iterateImages(images){
  images.forEach(image => {
    dogList(image)
  });
}

function dogList(image){
  const img = document.createElement("img")
  img.src = image
  imageContainer.append(img)
}

function loadBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => iterateBreeds(json.message));
}

function iterateBreeds(breeds){
  dogBreeds = Object.keys(breeds)
  dogBreeds.forEach(breed => {
    listBreeds(breed)
  })
}

function listBreeds(breed){
  const li = document.createElement("li")
  li.innerText = breed
  li.style.cursor = "pointer"
  breedContainer.append(li)
  li.addEventListener("click", changeColor)
  
}

function changeColor(event){
  if (event.target.style.color === "green") {
    event.target.style.color = "black"
  } else {
    event.target.style.color = "green"
  }
}

breedDropdown.addEventListener("change", function(e){
  const letter = e.target.value

  const filteredBreeds = dogBreeds.filter(function(breed){
    return breed.startsWith(letter)
  })
  breedContainer.innerHTML = ""
  listBreeds(filteredBreeds)
})












loadImages();
loadBreeds();







