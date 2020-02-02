document.getElementById("music-add").style.color = "orange";
var current_page = 1;
const next_button = document.getElementById("next-button");
const prev_button = document.getElementById("prev-button");
let title = document.getElementById("tutorial-title");
let description = document.getElementById("tutorial-description");
const breadcrumb_items = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
];

next_button.addEventListener("click", function() {
  if (current_page < 3) {
    current_page++;
  }
  change_page();
});

prev_button.addEventListener("click", function() {
  if (current_page > 1) {
    current_page--;
  }
  change_page();
});

function change_page() {
  switch (current_page) {
    case 1:
      document.getElementById("music-add").style.color = "orange";
      document.getElementById("music-library").style.color = "white";
      breadcrumb_items.forEach(function(item) {
        item.classList.remove("active");
      });
      breadcrumb_items[0].classList.add("active");

      title.innerHTML = current_page + ". Add a song to the library!";
      description.innerHTML =
        "By pressing this icon " +
        '<i class="material-icons">library_add</i>' +
        " it can be found in the navigation bar above.";

      prev_button.classList.add("disabled");
      prev_button.classList.remove("waves-effect");
      break;
    case 2:
      document.getElementById("music-add").style.color = "white";
      document.getElementById("music-library").style.color = "orange";
      breadcrumb_items.forEach(function(item) {
        item.classList.remove("active");
      });
      breadcrumb_items[1].classList.add("active");

      title.innerHTML =
        current_page + ". Look through others contributions to the library.";
      description.innerHTML =
        "You might find something new that you enjoy! Look for this symbol in the navigation bar " +
        '<i class="material-icons">library_music</i>';

      break;
    case 3:
      breadcrumb_items.forEach(function(item) {
        item.classList.remove("active");
      });
      breadcrumb_items[2].classList.add("active");

      title.innerHTML = current_page + ". Simple as that, now go try it out!";
      description.innerHTML = "";

      next_button.classList.add("disabled");
      next_button.classList.remove("waves-effect");
      break;
  }

  if (current_page < 3) {
    next_button.classList.remove("disabled");
    next_button.classList.add("waves-effect");
  }
  if (current_page > 1) {
    prev_button.classList.remove("disabled");
    prev_button.classList.add("waves-effect");
  }
}
