import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a")
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;
document.querySelector("title").innerHTML = parkData.fullName;


function parkInfoTemplate(info){
    return `<a href="/" class="hero-banner-title">${info.name}</a>
    <p class="hero-banner-subtitle">
    <span>${info.designation}<span>
    <span>${info.states}<span>
    </p>`;
}
parkInfoTemplate(parkData)

const heroImg = document.querySelector(".hero-banner > img")
heroImg.url = parkData.images[1].url