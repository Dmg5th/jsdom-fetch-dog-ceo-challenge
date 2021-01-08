const imageContainer = document.querySelector("#dog-image-container")
const breedContainer = document.querySelector("#dog-breeds")
const breedDropdown = document.querySelector("#breed-dropdown")

let breedList = []

function loadImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(json => seperateImages(json));
}

function seperateImages(images){
  const dogImages = images.message
  dogImages.forEach(image => {
    imageLi(image)
  });
}

function imageLi(image){
  const img = document.createElement("img")
  img.src = image
  imageContainer.appendChild(img)
}

function loadBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => seperateBreeds(json.message));
}

function seperateBreeds(breeds){
  breedList = Object.keys(breeds)
  breedList.forEach(breed => {
    const li = document.createElement("li")
    li.innerText = breed 
    breedContainer.appendChild(li)
    li.style.cursor = "pointer"
    li.addEventListener("click", changeColor)
    })
  }

  function changeColor(event){
    if (event.target.style.color === "pink") {
      event.target.style.color = "black"
    } else {
      event.target.style.color = "pink"
    }
  }

breedDropdown.addEventListener("change", function(e){
  breedContainer.innerHTML = ""
  const letter = e.target.value

  const filteredBreeds = breedList.filter(function(breed){
    return breed.startsWith(letter)
  })
  filteredBreeds.forEach(breed=> {
    const li = document.createElement("li")
    li.innerText = breed
    breedContainer.appendChild(li)
    li.style.cursor = "pointer"
    li.addEventListener("click", changeColor)
  });

})

loadImages();
loadBreeds();






