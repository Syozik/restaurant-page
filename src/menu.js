function appendMeals(courseContent, parent){
    let content = courseContent.split('\n');    
    for (let row of content){
        
        let meal = {
            title: row.split(' - ')[0],
            description: row.split(' - ')[1]
        };

        meal.image = `../pictures/${meal.title}.jpg`;
        let mealNode = document.createElement('li');
        let titleNode = document.createElement('div');
        titleNode.innerText = meal.title;
        titleNode.style.cssText = "font-size: 1.3rem; font-weight: bold";
        titleNode.className = "mealTitle";
        let descriptionNode = document.createElement('div');
        descriptionNode.innerText = meal.description;
        descriptionNode.style.cssText = "color: grey";
        let imageNode = document.createElement("img");
        imageNode.setAttribute('src', meal.image);
        imageNode.style.cssText = `width:5vw; height: 5vw; border-radius: 50%; grid-row: 1/3`;
        for (let child of [imageNode, titleNode, descriptionNode]){
            mealNode.appendChild(child);
        }
        mealNode.style.cssText = "display: grid; grid-template-columns: 1fr 5fr; margin: 0px 10px 10px 10px;";
        parent.appendChild(mealNode);
    }
}

function showMenu(){
    document.body.style.cssText = "overflow-y: visible";
    let a = document.querySelector("#back img");
    a.style.visibility = "visible";
    let page = document.querySelector(".main-page");
    page.innerHTML = "";
    let text = document.createElement("div");
    text.className = "header-text";
    text.innerText = "Menu";
    text.style.marginTop = 0;
    page.append(text);
    let menu = document.createElement("div");
    menu.className = "menu";
    let appe = document.createElement("ul");
    appe.className = 'section';
    let sectionTitle = document.createElement("h3");
    sectionTitle.innerText = "APPETIZERS";
    appe.appendChild(sectionTitle);
    let appeContent = `Bruschetta al Pomodoro - Grilled bread topped with fresh diced tomatoes, garlic, basil, and olive oil.
Insalata Caprese - Tomato, mozzarella, basil, balsamic glaze.
Calamari Fritti - Fried calamari, marinara sauce.`;
    appendMeals(appeContent, appe);

    let firstCourses = document.createElement("ul");
    firstCourses.className = 'section';
    let firstCoursesContent = `Pescatore Rosso - Linguine, mixed seafood (shrimp, mussels, calamari), tomato sauce, garlic, parsley.
Risotto ai Funghi - Arborio rice, mixed mushrooms, Parmigiano-Reggiano.
Lasagna Bolognese - Layers of pasta, Bolognese sauce, ricotta, mozzarella.`;
    sectionTitle = document.createElement("h3");
    sectionTitle.innerText = "FIRST COURSES";
    firstCourses.appendChild(sectionTitle);
    appendMeals(firstCoursesContent, firstCourses);

    let mainCourses = document.createElement("ul");
    mainCourses.className = 'section';
    let mainCoursesContent = `Saltimbocca alla Romana - Veal, prosciutto, sage, white wine sauce.
Pollo alla Cacciatora - Chicken, tomatoes, peppers, onions, mushrooms, red wine.
Branzino al Cartoccio - Mediterranean sea bass, lemon, garlic, herbs.`;
    sectionTitle = document.createElement("h3");
    sectionTitle.innerText = "MAIN COURSES";
    mainCourses.appendChild(sectionTitle);
    appendMeals(mainCoursesContent, mainCourses);

    let desserts = document.createElement("ul");
    desserts.className = 'section';
    let dessertsContent = `Tiramisu - Ladyfingers, espresso, mascarpone, cocoa.
Cannoli Siciliani - Pastry shells, ricotta, chocolate chips.
Panna Cotta - Cream, gelatin, vanilla, berry compote.`;
    sectionTitle = document.createElement("h3");
    sectionTitle.innerText = "DESSERTS";
    desserts.appendChild(sectionTitle);    
    appendMeals(dessertsContent, desserts);
    desserts.style.cssText = "grid-column:2";

    for (let sector of [appe, firstCourses, mainCourses, desserts]){
        menu.appendChild(sector);
    }
    
    page.appendChild(menu);
}
