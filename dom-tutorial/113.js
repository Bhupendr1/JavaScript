//add new html elements to page

//innerHTML to add html element
const todolist = document.querySelector(".todo-list");
console.log(todolist.innerHTML);
todolist.innerHTML +="<li>New Todo</li>";
todolist.innerHTML += "<li>Teach Students</li>";
//when you should use it , when you should not