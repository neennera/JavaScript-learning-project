const count = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup", (e) => {
    count.innerHTML = input.value.length
})