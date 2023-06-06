var button = document.querySelector("#firstBtn");

function dbClick() {
    console.log("dbclick");
}

button.addEventListener("click", () => {
    console.log("click!");
});

button.addEventListener("dblclick", dbClick);

button.addEventListener("mouseover", function() {
    console.log("mouseover!");
})

