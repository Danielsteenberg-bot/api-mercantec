

const template = (data) => {
    return `

    <div class="gallery-item">
        <div class="gallery-item-container">
            <h6>${data.name} ${data.species}</h6>
            <img src="${data.image}" class="gallery-image">
            <div class="gallery-overlay">
              <div class="gallery-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel error corrupti veniam asperiores quibusdam unde iure itaque expedita sapiente?</p>
                <i class="fa-solid fa-circle-play"></i>
              </div>
            </div>
          </div>
        </div>
    `
}






const writeData = (menu) => {
    const htmlEle = document.querySelector(".gallery-wrapper");
    menu.map((data) => {
        htmlEle.innerHTML += template(data);

    })
   
}







fetch("https://rickandmortyapi.com/api/character/1,22")
.then(response => response.json())
.then(response => {writeData(response)
    console.log(response)
})





