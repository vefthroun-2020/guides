//DOM -> Document Object Model

const myDivs = document.getElementsByTagName("div");
//console.log(myDivs[2].innerHTML);
//console.log(myDivs);

const clickDiv = myDivs[2];
//console.log(clickDiv);
console.log(clickDiv.innerHTML);
const myClickString = "click";
const myClickFunction = (e)=>{
    //console.log("works")
    myDivs[0].innerHTML = "hello world";
    var button = document.createElement("button");
    button.innerHTML = "press me"
    myDivs[1].appendChild(button)
}
clickDiv.addEventListener(myClickString, myClickFunction );

// put a link into the last div (myDi)