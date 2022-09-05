//**************** */ start features *************************
let myFeatures = document.querySelector(".features");
let myCols = document.querySelectorAll(".features .row .anime");
window.addEventListener("scroll", function () {
  if (window.scrollY >= myFeatures.offsetTop) {
    myCols.forEach((col) => {
      col.classList.add("left");
    });
  }
});

//**************** */ end features *************************
//**************** */ start image *************************
let mySection = document.querySelector(".image");
let myDivs = document.querySelectorAll(".image .row .col-md-6");

window.addEventListener("scroll", function () {
  if (window.scrollY >= mySection.offsetTop) {
    myDivs.forEach((div) => {
      div.classList.add("left-right");
    });
  }
});
//**************** */ end image *************************

//**************** */ start about us *************************
let myAbout = document.querySelector(".about-us .container");
let mycards = document.querySelectorAll(".about-us .row div");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myAbout.offsetTop + 150) {
    mycards.forEach((card) => {
      card.classList.add("animation");
    });
  }
});
//**************** */ end about us *************************

//**************** */ start team *************************
let myTeam = document.querySelector(".team");
let myBoxs = document.querySelectorAll(".team .row .col-md-6");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myTeam.offsetTop - 100) {
    myBoxs.forEach((box) => {
      box.classList.add("box-anime");
    });
  }
});
//**************** */ end about us *************************

//**************** */ start sponsore *************************
let mySponsore = document.querySelector(".sponsore");
let myContainer = document.querySelector(".sponsore .container");

window.addEventListener("scroll", function () {
  if (window.scrollY >= mySponsore.offsetTop - 300) {
    myContainer.classList.add("cont");
  }
});
//**************** */ end sponsore *************************
//**************** */ start blog *************************
let myBlog = document.querySelector(".blog");
let myBlogCols = document.querySelectorAll(".blog .row .col-md-6");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myBlog.offsetTop - 200) {
    myBlogCols.forEach((blogCol) => {
      blogCol.classList.add("blog-col-anime");
    });
  }
});
//**************** */ end blog *************************
