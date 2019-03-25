/*
Add the correct string as the first argument to addEventListener()
Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
Have your developer tools open. When you click the button, the following element...
*/
function flightFunction() {
    const section = document.getElementById("flight")
    section.classList.remove("disabled")
    section.classList.add("enabled")
}

document.getElementById("activate-flight").addEventListener("click", flightFunction)
/*
Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener()
statements for handling the click event on the other two buttons. Those event handlers should perform the same step of 
removing disabled, and adding enabled on the corresponding <section> elements
*/

function mindreadingFunction() {
    const section = document.getElementById("mindreading")
    section.classList.remove("disabled")
    section.classList.add("enabled")
}
document.querySelector("#activate-mindreading").addEventListener("click", mindreadingFunction)

function xrayFunction() {
    const section = document.getElementById("activate-xray")
    section.classList.remove("disabled")
    section.classList.add("enabled")
}

document.querySelector("#activate-xray").addEventListener("click", xrayFunction)

/*
Write two more event handlers for activating and deactivating all powers when the corresponding buttons
 are clicked. You will need to use the document.querySelectorAll() method for these.
*/

function activateHandler() {
    const sections = document.querySelectorAll(".power")
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("disabled")
        sections[i].classList.add("enabled")
    }
    document.getElementById("activate-all").addEventListener("click", activateHandler)
}

function deactivateHandler() {
    const sections = document.querySelectorAll(".power")
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("enabled")
        sections[i].classList.add("disabled")
    }
}

document.getElementById("deactivate-all").addEventListener("click", deactivateHandler)