const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  const usersRequest = await fetch("https://randomuser.me/api?results=5");
  const data = await usersRequest.json();

  const userResults = data.results; // array of objects
  displayUsers(userResults);
};

getData();

const displayUsers = function (userResults) {
  // Clear the randomFolks element
  randomFolks.innerHTML = "";

  for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
            <h2>${name}</h2>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
        `;
    randomFolks.append(userDiv);
  }
};
