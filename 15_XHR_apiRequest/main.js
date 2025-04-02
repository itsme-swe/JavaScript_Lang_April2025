const requestURL = "https://api.github.com/users/harshmehra";

const xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.followers);
  }
};

console.log("HERE");

xhr.send();
