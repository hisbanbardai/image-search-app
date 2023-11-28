const accessKey = "U205g-rUhshHJmhSbt-tuJOaRjkcGdlRd4MCOli5-8g";

const formEle = document.querySelector("form");
const searchInputEle = formEle.querySelector("input");
const searchResultsEle = document.querySelector(".search-results");
const showMoreEle = document.querySelector("#show-more-btn");

let page = 1;

async function searchImages(searchInput) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (results.length) {
    results.map((result) => {
      const image = document.createElement("img");
      image.src = `${result.urls.small}`;
      image.alt = `${result.alt_description}`;
      
      const imageLink = document.createElement("a");
      imageLink.href = `${result.links.html}`;
      imageLink.target = `_blank`;
      imageLink.rel = `noopener noreferrer`;
      imageLink.text = `${image.alt}`;

      const searchResult = document.createElement("section");
      searchResult.classList.add('search-result');
      searchResult.append(image, imageLink);
      searchResultsEle.appendChild(searchResult);

      showMoreEle.style.display = "block";
    });
  }
}

formEle.addEventListener("submit", (event) => {
  event.preventDefault();
  searchImages(searchInputEle.value);
});