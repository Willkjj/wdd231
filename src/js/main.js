import { getParkData , getParkInfoLinks, renderClimbingList} from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import "../css/style.css"; // we can do this type of import because we are using Vite
import "../css/home.css";

const parkCode = "yell"


// This will be the park full name, and the description from our data. You can do this in much the same way we inserted data in the header.
export function setParkIntro(data){
    const introSection = document.querySelector("section.intro")
    introSection.innerHTML = `<h1 class="introSectionTitle">${data.fullName}</h1>
    <p class="introSectionDescription">${data.description}</p>`
}


export function setParkInfo(data){
    const infoSection = document.querySelector("section.info")
    const cards = data.map(mediaCardTemplate)
    infoSection.insertAdjacentHTML("afterbegin", cards.join(""))
    
}

async function init(){
    const parkData = await getParkData(parkCode)
    const parkInfoLinks = await getParkInfoLinks(parkData.images)
    setParkIntro(parkData)
    setParkInfo(parkInfoLinks)
    setHeaderFooter(parkData)
    renderClimbingList()
    enableNavigation()
}

init();

function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle")

    menuButton.addEventListener("click", (e) => {
        let target = e.target
        document.querySelector(".global-nav").classList.toggle("show")   
        
        if (target != "BUTTON") {
            target = target.closest("button")
        }
        
        if (document.querySelector(".global-nav").classList.contains("show")) {
            target.setAttribute("aria-explanded", true)
        } else {
            target.setAttribute("aria-expanded", false)
        }

    })

}
