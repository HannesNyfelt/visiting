let TV = document.getElementById("TV")
let num = JSON.parse(localStorage.getItem('Times'));
let count = 0
count = num


window.addEventListener('load', function () {
    count++
    console.log(count);
    window.localStorage.setItem('Times', count);
    TV.textContent = count;
})