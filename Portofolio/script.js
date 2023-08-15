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
