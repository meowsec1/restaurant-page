import { homePageContents } from "./homePage";
import { menuPageContents } from "./menuPage";
import { contactPageContents } from "./contactPage";

import './style.css';

const divContent = document.querySelector("#content");

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

homePageContents();

home.addEventListener("click", function() {
    divContent.innerHTML = "";
    homePageContents();
})

menu.addEventListener("click", function() {
    divContent.innerHTML = "";
    menuPageContents();
})

contact.addEventListener("click", function() {
    divContent.innerHTML = "";
    contactPageContents();
})

