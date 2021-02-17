import { aboutload } from "./about.js";
import { contactload } from "./contact.js";
import { menuload } from "./menu.js";
import { pageload } from "./pageload.js"

pageload();
aboutload();
const content = document.querySelector('#content');
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')
const about = document.querySelector('#about');
function clearContent() {
    //pretty rigid way to do it. only work with exactly 3 children…
    for (let i=0; i < 3; i++) {
        content.removeChild(content.lastChild);
    }
}
menu.addEventListener('click', () => {
    clearContent();
    menuload();
})
contact.addEventListener('click', () => {
    clearContent();
    contactload();
})
about.addEventListener('click', () => {
    clearContent();
    aboutload();
})