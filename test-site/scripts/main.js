let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wzy1.jpg") {
    myImage.setAttribute("src", "images/wzy.jpg");
  } else {
    myImage.setAttribute("src", "images/wzy1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎你，" + myName + "!";
  }
}

myButton.onclick = function () {
  setUserName();
};
