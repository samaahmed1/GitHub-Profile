document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/sun.webp";
  }
};
function getData() {
  fetch(`https://api.github.com/users/samaahmed1`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("user-data").innerHTML = `
        <div class= "avatar">
        <img src= "${data.avatar_url}" alt="data.name" />
        <h1>${data.name}</h1>
        <a href= "${data.html_url}" target="_blank">GitHub</a>
        </div>
        <ol id= "user-repos" class= "user-repos container"></ol>
        `;
    });
  fetch(`https://api.github.com/users/samaahmed1/repos`)
    .then((response) => response.json())
    .then((data) => {
      let repos = "";
      for (let i = 0; i < data.length; i++) {
        repos += `
        <li>
        <a href="${data[i].homepage}" target="_blank">
          ${data[i].name}
        </a>
      </li>
        `;
      }
      document.getElementById("user-repos").innerHTML = repos;
    });
}
getData();
