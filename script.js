


const main = document.getElementById("main");

main.innerHTML =`
<h1 class="header">DICTIONARY</h1>
<input type="text" placeholder="Enter a Word" id="searchWord"></br>
<button type=" search" id="search">Search</button>
`


const res = document.createElement("div");
res.className = "result";

main.append(res);
const fetchData = () => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.value}`)
    .then((response) => response.json())
    .then((data) => {
      const { definition } = data[0].meanings[0].definitions[0];
      console.log(definition);
      res.innerHTML = `
        <h3>"${searchWord.value}"</h3>
        <p>"${definition}"</p>
      `;
    })
    .catch(() => {
      division1.innerHTML = `<p><b>This is Error: Enter the correct word</b></p>`;
    });
};

const wordSearch = document.getElementById("search");
wordSearch.addEventListener("click", fetchData);