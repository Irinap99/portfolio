"use strict";

//copyright year
const year = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

//expand container on hover
let hoverTimeout;
const projectImgContainers = document.querySelectorAll(
  ".projects-categories__box"
);
projectImgContainers.forEach(function (projectImgContainer) {
  const projectLink = projectImgContainer.querySelector(
    ".projects-categories__link"
  );
  //Expand the width
  projectLink.addEventListener("mouseenter", function () {
    projectImgContainer.style.width = "40rem";
    hoverTimeout = setTimeout(function () {
      projectImgContainer.style.width = "40rem";
    }, 200);
  });

  //Shrink back to original size
  projectLink.addEventListener("mouseleave", function () {
    projectImgContainer.style.width = "30rem";
    clearTimeout(hoverTimeout);
  });
});
