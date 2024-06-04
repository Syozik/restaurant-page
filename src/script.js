function resetPage(){
    document.querySelector(".main-page").innerHTML = `<img src="../pictures/pizza.jpg" id="pizzaImage">
    <div class="header-text">
        Welcome to La Cucina Felice!
    </div>
    <img src="../pictures/caprese.jpg" id="capreseImage" alt="caprese">
    <div class="welcome-message">
        Indulge in the flavors of Italy, where every dish tells a story and every meal is a celebration of tradition and taste. At La Cucina Felice, we pride ourselves on serving authentic Italian cuisine crafted with passion and love.

        <p>As the great Italian chef Lidia Bastianich once said, "<em>Cooking is an art, but all art requires knowing something about the techniques and materials.</em>" Inspired by this philosophy, our talented chefs pour their expertise into every dish, using the finest ingredients to create culinary masterpieces that delight the senses.</p>

        Join us for a dining experience that's as rich in flavor as it is in tradition. From our kitchen to your table, benvenuti a La Cucina Felice!
    </div>
    <img src="../pictures/salad.jpg" id="saladImage" alt="salad">
    <img src="../pictures/spaghetti.jpg" id="pastaImage">`
    document.querySelector("#back img").style.visibility = "hidden";
    document.body.style.overflow = "hidden";
    
}