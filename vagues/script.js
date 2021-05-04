let para = document.querySelector('#footer');
let date = new Date();
let year = date.getFullYear();
console.log(year);
para.textContent = "© " + year + " - Design & Development by Patate";