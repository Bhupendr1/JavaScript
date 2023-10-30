let navitems = document.querySelectorAll("a");
const NewItems = Array.from(navitems);
// for(let i=0;i<navitems.length;i++){
//     const navitem = navitems[i];
//     navitem.style.backgroundColor="#fff";
//     navitem.style.color="green";
//     navitem.style.fontWeight="bold";
// }
// for(let item of navitems){
//     item.style.backgroundColor="#fff";
//     item.style.color="green";
//     item.style.fontWeight="bold";
// }
console.log(Array.isArray(NewItems));
navitems.forEach((navItem)=>{
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
    navItem.style.fontWeight="bold";
})