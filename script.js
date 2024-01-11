const headline = document.querySelector('.headline');

headline.addEventListener('click', e => {
    console.log('Clicked');
})

let numb = parseInt(prompt('Choose a number'));
for (let i = 0; i < numb; i++) {
    if (i === 0 || i < 0) {
        continue;
    }
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else console.log(i);
    
}