"use strict";

const navLiEle = document.querySelectorAll(".nav-links li");
const allTextEle = document.querySelectorAll(".text-content p");
const allImagesEle = document.querySelectorAll(".img-holder img");


function addClassActive(elements, i) {
  elements.forEach((ele) => ele.classList.remove("active"));
  elements[i].classList.add("active");
}


function changePage(i) {
  addClassActive(navLiEle, i)
  addClassActive(allTextEle, i)
  addClassActive(allImagesEle, i)
}


navLiEle.forEach((ele, i) => 
  ele.addEventListener("click", () => changePage(i))
);
