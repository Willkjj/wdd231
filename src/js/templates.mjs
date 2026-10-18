import spritePath from '../images/sprite.symbol.svg';

export function parkInfoTemplate(info){
    return `<a href="/" class="hero-banner-title">${info.name}</a>
    <p class="hero-banner-subtitle">
    <span>${info.designation}<span>
    <span>${info.states}<span>
    </p>`;
}

export function mediaCardTemplate(info){
    return `<div class="mediaCard">
    <a href="${info.link}">
    <img src=${info.image}></img>
    <h3>${info.name}</h2></a>
    <p>${info.description}</p>
    </div>`
}

export function footerTemplate(info){
    const mailing = getMailingAddress(info.addresses)
    const voice = getVoicePhone(info.contacts.phoneNumbers)

    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
    </section>`;
}
function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phoneNumbers){
    const voice = phoneNumbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

export function alertsTemplate(alert){
    let type = ""
    switch (alert.category){
        case "Park Closure":
            type = "closure"
            break
        default:
            type = alert.category.toLowerCase()
    }
    return `<li class="alert">
    <svg class="icon alert-${type}" role="presentation" focusable="false" aria-hidden="true">
        <use xlink:href="${spritePath}#alert-${type}"></use>
    </svg>
    <div>
    <h3 class="alert-${type}">${alert.title}</h3    >
    <p>${alert.description}</p>
    </div>
    </li>
    `
}

export function parkServicesTemplate(parkService){
    return `<li>
    <h3>${parkService.name}</h3>
    <p>${parkService.description}</p>
    <p>${parkService.directionsInfo}<p>
    </li>
    `
}

export function activitiesTemplate(activity){
    return `
    <li>${activity.name}</li>
    `
}