const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const output = document.querySelector('#output');
    const name = document.querySelector('input').value;
    output.innerHTML = `<h1>Hello and welcome ${name}</h1>`;
})
