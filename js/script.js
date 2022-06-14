const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function(numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults);
}
getData(1);

const displayUsers = function(userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResults) {
       console.log(user);
       const name = user.name.first;
       const country = user.location.country;
       const imageUrl = user.picture.medium;
       const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />`;
        randomFolks.append(userDiv);
      }
      
}

selectUserNumber.addEventListener("change", function(e) {
    const numUsers = e.target.value;
    getData(numUsers);
});