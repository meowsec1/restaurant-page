import michelinImg from './michelin.jpg';

export function homePageContents() {

        const divContent = document.querySelector("#content");

        const h1 = document.createElement("h1");
        h1.textContent = "Burnt Hair Cuisine";

        const img = document.createElement("img");
        img.src = michelinImg;
        img.alt = "An image of some of the fine foods served at Burnt Hair."

        const p = document.createElement("p");
        p.textContent = `Burnt Hair was awarded "Ramsay's Best Restaurant of the Year" award in 2024. For good reason.`


        divContent.appendChild(h1);
        divContent.appendChild(img);
        divContent.appendChild(p);

    }
