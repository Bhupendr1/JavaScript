let navItems = document.getElementsByTagName("a");
// for(let i=0; i<navItems.length;i++){
//     const navitem = navItems[i];
//     navitem.style.backgroundColor="#fff";
//     navitem.style.color="green";
//     navitem.style.fontWeight="bold"
// }
    // for(let item of navItems){
    //     item.style.backgroundColor="#fff";
    //     item.style.color="green";
    //     item.style.fontWeight="bold"
    // }
    //we can not use forEach loop of htmlcollection

// if i want to use foreach loop then we have to convet htmlcollection item its array like object into array
const navitems=Array.from(navItems);
navitems.forEach((navitems)=>{
    navitems.style.backgroundColor="#fff";
    navitems.style.color="green";
    navitems.style.fontWeight="bold"
})

