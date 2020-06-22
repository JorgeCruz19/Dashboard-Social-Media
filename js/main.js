const checkbox = document.getElementById("checkbox");
document.body.classList.add("is-light-mode");

/* if (window.matchMedia("(prefers-color-scheme: dark)")) {
   checkbox.setAttribute("checked", true);
} */
/* else{
   checkbox.removeAttribute("checked", true);
} */
checkbox.addEventListener("change", function(event) {
   if (this.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
      
   } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
   }
});
