import { getParkAlerts, getParkData, getVisitorCenterData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { activitiesTemplate, alertsTemplate, parkServicesTemplate } from "./templates.mjs";
import "../css/style.css"; // we can do this type of import because we are using Vite
import "../css/conditions.css";

const parkCode = "yell"

function setAlerts(data){
    const alertsBox = document.querySelector(".alerts ul")
    const alerts = data.map(alertsTemplate)
    
    alertsBox.innerHTML = ""

    alertsBox.insertAdjacentHTML("beforeend",alerts.join(""))
}

function setVisitorCenterData(data){
    const centerBox = document.querySelector(".visitor details ul")
    const visitorCenterData = data.map(parkServicesTemplate)

    centerBox.innerHTML = ""
    centerBox.insertAdjacentHTML("beforeend",visitorCenterData.join(""))

}

function setActivities(data){
    const activitiesBox = document.querySelector(".activities details ul")
    console.log(data)
    const activitiesData = data["activities"].map(activitiesTemplate)

    activitiesBox.innerHTML = ""
    activitiesBox.insertAdjacentHTML("beforeend", activitiesData.join(""))
    
}

async function init(){
    const parkData = await getParkData(parkCode)
    const alertData = await getParkAlerts(parkCode)
    const visitorCenterData = await getVisitorCenterData(parkCode)
    setAlerts(alertData)
    setHeaderFooter(parkData)
    setVisitorCenterData(visitorCenterData)
    setActivities(parkData)
}
init();