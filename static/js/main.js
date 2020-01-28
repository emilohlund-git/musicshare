var current_page = 1;
const next_button = document.getElementById("next-button")
const prev_button = document.getElementById("prev-button")
const title = document.getElementById("tutorial-title")
const description = document.getElementById("tutorial-description")

next_button.addEventListener("click", function() {
    console.log("lol")
    title.innerHTML = "2. Yolo."
});