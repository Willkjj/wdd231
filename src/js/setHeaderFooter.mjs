import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data){

    const disclaimer = document.querySelector(".disclaimer > a")
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    document.querySelector("head > title").textContent = data.fullName;

    document.querySelector(".hero-banner > img").src = data.images[0].url

    document.querySelector(".hero-banner-content").innerHTML = parkInfoTemplate(data)

}

function setParkFooter(data){
    const footer = document.querySelector("footer")
    footer.innerHTML += footerTemplate(data)
}

export function setHeaderFooter(data){
    setParkFooter(data)
    setHeaderInfo(data)
}