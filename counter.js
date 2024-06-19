if (!localStorage.getItem('counter')) {
    localStorage.setItem("counter", 0);
}

function count() {
    let counter = parseInt(localStorage.getItem('counter'), 10); // parseInt(localStorage.getItem('counter'), 10) converts the string value from localStorage into a number, allowing for correct incrementing.

    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
});
