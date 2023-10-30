const mainButton = document.querySelector("button");
const body = document.body;
const changTextcolor = document.querySelector("#changeText");
function changeBack(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const tColor = `rgb(${red},${green},${blue})`;
    return tColor;
}
mainButton.addEventListener("click",()=>{
 body.style.backgroundColor=changeBack();
 changTextcolor.textContent=changeBack();
})