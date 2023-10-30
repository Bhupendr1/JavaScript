//inner text jo content user ko show nhi ho rha h jo display none ho chuka h wo content get krega
const mainheading = document.getElementById("main-heading");
console.log(mainheading.textContent);
mainheading.textContent="this is something else";
console.log(mainheading.textContent);
