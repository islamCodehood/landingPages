window.onload = function() {
  var toggleNav = function() {
    var toggler = document.querySelector(".navbar-toggler");
    var heroImg = document.querySelector(".hero-img");
    var navbar = document.querySelector(".navbar-collapse")
    toggler.addEventListener("click", function() {
        if(!navbar.classList.contains('show')) {
            heroImg.style.marginTop = "0";
        } else {
            heroImg.style.marginTop = "-110px";
            heroImg.style.transition = ".6s"
        }
    });
  };
  toggleNav()
};
