let box = document.querySelector("#light")
let buttonOn = document.querySelector("#btnOn")
let buttonOff = document.querySelector("#btnOff")


buttonOn.addEventListener("click", () => {
    light.style.backgroundColor = "yellow"
    alert("Background color yellow On")

})
buttonOff.addEventListener("click", () => {
    light.style.backgroundColor = "white"
    alert("background color Off")
})
buttonOff.style.backgroundColor = "Green"