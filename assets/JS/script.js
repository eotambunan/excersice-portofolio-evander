const portfolioData = [
  { title: "Proyek1", description: "Deskripsi proyek 1." },
  { title: "Proyek2", description: "Deskripsi proyek 2." },
  { title: "Proyek3", description: "Deskripsi proyek 3." },
  //aselole
];

const portfolioContainer = document.getElementById("portfolioContainer");

portfolioData.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.className = "item";
  projectItem.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    `;
  portfolioContainer.appendChild(projectItem);
});

// Section Form Search
const form = document.querySelector("form");
const items = document.querySelectorAll(".item");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchTerm = form.search.value.toLowerCase();

  items.forEach((item) => {
    const projectTitle = item.querySelector("h2").textContent.toLowerCase();
    const projectDescription = item.querySelector("p").textContent.toLowerCase();

    if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
class Pokemon {
  reset() {
    window.location.reload();
  }
  showPokemonApi() {
    const pokemon_result = document.getElementById("pokemon-result");
    pokemon_result.innerHTML = "";
    pokemon_result.innerHTML = "Aku pokemon api";
    pokemon_result.style.color = "red";
  }
  showPokemonAir() {
    const pokemon_result = document.getElementById("pokemon-result");
    pokemon_result.innerHTML = "";
    pokemon_result.innerHTML = "Aku pokemon air";
    pokemon_result.style.color = "blue";
  }
  showPokemonAngin() {
    const pokemon_result = document.getElementById("pokemon-result");
    pokemon_result.innerHTML = "";
    pokemon_result.innerHTML = "Aku pokemon angin";
    pokemon_result.style.color = "gray";
  }
  showPokemonJahat() {
    const pokemon_result = document.getElementById("pokemon-result");
    pokemon_result.innerHTML = "";
    pokemon_result.innerHTML = "Aku pokemon jahat";
    pokemon_result.style.color = "black";
  }
}
const pokemon = new Pokemon();

const pokemon_air = document.getElementById("pokemon1");
pokemon_air.addEventListener("click", pokemon.showPokemonAir);

const pokemon_api = document.getElementById("pokemon2");
pokemon_api.addEventListener("click", pokemon.showPokemonApi);

const pokemon_angin = document.getElementById("pokemon3");
pokemon_angin.addEventListener("click", (event) => {
  pokemon.showPokemonAngin();
});

const pokemon_jahat = document.getElementById("pokemon4");
pokemon_jahat.addEventListener("click", pokemon.showPokemonJahat);

const btn_reset = document.getElementById("btn-reset");
btn_reset.addEventListener("click", pokemon.reset);
