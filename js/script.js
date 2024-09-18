var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
  button.innerText = "It's working!";
  cat.classList.add("show");
});
