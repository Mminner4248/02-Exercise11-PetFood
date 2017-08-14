console.log("food.js");
var petFoods = (function () {
    var dogfoods = [];
    var catfoods = [];

return {
    loadDogFood: function (showDogFood) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function (){
            dogfoods = JSON.parse(this.responseText).dog_brands;
            console.log("dogfoods", dogfoods);

            showDogFood(dogfoods);
        });
        xhr.open("GET", "dogfood.json");
        xhr.send();
    },
     loadCatFood: function (showCatFood) {
        var xhr2 = new XMLHttpRequest();

        xhr2.addEventListener("load", function (){
            catfoods = JSON.parse(this.responseText).cat_brands;
            console.log("catfoods", catfoods);

            showCatFood(catfoods);
        });
        xhr2.open("GET", "catfood.json");
        xhr2.send();
    }
}
})(petFoods || {});