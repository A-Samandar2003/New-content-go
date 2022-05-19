"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".promo__btn button"),
    newsList = document.querySelector(".promo__interactive-list"),
    newGenre = document.querySelector(".promo__genre"),
    readMore = document.querySelector(".promo__btn button"),
    add = document.querySelector(".add"),
    addinput = add.querySelector(".adding__input"),
    checkbox = add.querySelector("[type='checkbox']");
  btn.remove();
  newGenre.textContent = "UzNews";
  newGenre.style.color = "crimson";
  readMore.style.borderRadius = "10px";



  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArr = arr => arr.sort();
  add.addEventListener("submit", (event) => {
    event.preventDefault();
    let newFilm = addinput.value.toUpperCase();
    let favorite = checkbox.checked;
    if (newFilm) {
      if (favorite) {
        console.log("Sevimli yangilik qo'shildi");
      }
      if (newFilm.length > 21) {
        newFilm = `${newFilm.slice(0, 21)}...`;
      }
      news.push(newFilm);
      sortArr(news);
      createNewsList(news, newsList);
      addinput.value = ""
      event.target.reset();
    }
  });
  function createNewsList(array, HTML) {
    HTML.innerHTML = "";
    sortArr(news);
    array.forEach((item, index) => {
      HTML.innerHTML += `
      <li class="promo__interactive-item">
      ${index + 1}.${item}
      <div class="delete"></div>
      </li>`;
    });
    document.querySelectorAll(".delete").forEach((btn,i)=>{
      btn.addEventListener("click",()=>{
        btn.parentElement.remove()
        news.splice(i,1)
        createNewsList(news,newsList)
      })
    })
  }
  createNewsList(news, newsList);
});
