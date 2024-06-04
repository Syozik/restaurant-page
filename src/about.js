function showAbout(){
    let a = document.querySelector("#back img");
    a.style.visibility = "visible";
    let page = document.querySelector(".main-page");
    page.innerHTML = "";
    let text = document.createElement("div");
    text.className = "header-text";
    text.innerText = "About Us";
    page.append(text);

    let content = document.createElement("div");
    page.appendChild(content);
    let picture = document.createElement("img");
    picture.src = "../pictures/stuff.jpg";
    picture.className = "stuffImage";
    let description = document.createElement("div");
    description.innerHTML = `Experience the heart of Italian cuisine with us at La Cucina Felice!

    Discover the essence of Italian culinary tradition in the heart of Italy. Led by Head Chef Gene, our kitchen team crafts each dish with care, using the finest locally sourced ingredients. From handmade pasta to wood-fired pizzas, every plate tells a story of tradition and flavor.
    
    Our waitstaff, trained in the art of hospitality, ensure your dining experience is nothing short of exceptional. Whether it's a romantic dinner or a family celebration, our team is dedicated to making every moment memorable.
    
    Join us at La Cucina Felice for a taste of Italy and a warm welcome. Buon appetito!`;
    description.style.cssText = "max-width: 500px; font-size: 1.5rem; letter-spacing: 1px; margin-left: 100px; font-weight: bold; text-shadow: 2px 3px 4px black; padding: 30px; color: white; background: rgba(100, 100, 100, 0.9); border-radius: 4px"
    description.className = "about";
    content.appendChild(description);    
    content.appendChild(picture);
    content.style.cssText = "display: flex; justify-content: center; gap: 100px; margin: 20px 200px;";
}