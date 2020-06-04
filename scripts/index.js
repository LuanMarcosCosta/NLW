
const buttonSearch = document.querySelector("#page-home main a")

const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonSearch.addEventLitener("click", () => {
    modal.classList.remove("hide")
})

close.addEventLitener("click", () => {
    modal.classList.add("hide")
} )