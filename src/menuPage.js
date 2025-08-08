export function menuPageContents() {
    const divContent = document.querySelector("#content");
    
    divContent.innerHTML = "";
    
    const title = document.createElement("h1");
    title.textContent = "Menu";
    divContent.appendChild(title);
    
    const menuItems = [
        "Burger - $12",
        "Pizza - $15",
        "Salad - $10",
        "Fries - $6",
        "Soda - $3"
    ];
    
    const ul = document.createElement("ul");
    
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    
    divContent.appendChild(ul);
}