//parent child relationship
// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1=htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.parentNode)
// //sibling relationShip
// console.log(headElementNode.nextSibling);
// //ye textnode ko ignore krega like space or new line 
// console.log(textNode1.nextElementSibling); 
// //headelement k child node dekhne ho tab
// console.log(headElementNode.childNodes);
// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// console.log(div);
// div.style.color="#efefef";
// div.style.backgroundColor="#333";
// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector('title');
// const childnode = title.childNodes;
// console.log(childnode);

const container = document.querySelector(".container");
console.log(container.children);
// children---> children hum text node ko skip karne k liye use kartain hai 
// childNode---> childNode maine textnode (jismain new line or space aata hai) include hota h 