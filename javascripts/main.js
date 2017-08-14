console.log("main.js");

const dogFoodDiv = document.getElementById("dfood");
const catFoodDiv = document.getElementById("cfood");

function showDogFood(dogfoods) {
    console.log("dogfoods", dogfoods);

    dogfoods.forEach((df)=>{
        dogFoodDiv.innerHTML += `<h1> ${df.name}</h1>`;
        df.types.forEach((dft)=>{
            dogFoodDiv.innerHTML += `<h2> ${dft.type}</h2>`
            dft.volumes.forEach((volume)=>{
                dogFoodDiv.innerHTML += `<p> ${volume.name}</p>`
                dogFoodDiv.innerHTML += `<p> ${volume.price}</p>`
            })
        })
    })
}

function showCatFood(catfoods) {
    console.log("catfoods", catfoods);

    catfoods.forEach((brand) =>{
        console.log("catfoods", catfoods)
        catFoodDiv.innerHTML += `<h1>${brand.Brand}</h1>`;
            brand.Breeds.forEach((bred) =>{
               catFoodDiv.innerHTML += `<h2>${bred.Breed}</h2>`; 
                    
                bred.volumes.forEach((vol) => {
                    catFoodDiv.innerHTML += `<p>${vol.price}</p>`;
                    catFoodDiv.innerHTML += `<p>${vol.size}</p>`;
                    catFoodDiv.innerHTML += `<p>${vol.type}</p>`;
                })
            })
    })

}



petFoods.loadDogFood(showDogFood);
petFoods.loadCatFood(showCatFood);
