import { getParkData , getParkInfoLinks} from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

// This will be the park full name, and the description from our data. You can do this in much the same way we inserted data in the header.
function setParkIntro(data){
    const introSection = document.querySelector("section.intro")
    introSection.innerHTML = `<h1 class="introSectionTitle">${data.fullName}</h1>
    <p class="introSectionDescription">${data.description}</p>`
}


function setParkInfo(data){
    const infoSection = document.querySelector("section.info")
    const cards = data.map(mediaCardTemplate)
    infoSection.insertAdjacentHTML("afterbegin", cards.join(""))
    
}

setParkIntro(parkData)
setParkInfo(parkInfoLinks)
setHeaderFooter(parkData)