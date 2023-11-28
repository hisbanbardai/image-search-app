const accessKey = "U205g-rUhshHJmhSbt-tuJOaRjkcGdlRd4MCOli5-8g";

const formEle = document.querySelector("form");
const searchInputEle = formEle.querySelector("input");
const searchResultsEle = document.querySelector(".search-results");
const showMoreEle = document.querySelector("#show-more-btn");

let page = 1;

function searchImages(searchInput) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${accessKey}`;
  console.log(url);
}

formEle.addEventListener("submit", (event) => {
  event.preventDefault();
  searchImages(searchInputEle.value);
});