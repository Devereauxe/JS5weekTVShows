const searchInput = document.querySelector("#search-two");
const divs = document.querySelectorAll('.movie');

searchInput.addEventListener("keyup", function(event){
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ?

        (item.style.display = "block") : (item.style.display = "none");
    })
})