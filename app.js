const topChoice = document.getElementById('top')
const botChoice = document.getElementById('bot')
const cover = document.getElementById('cover')
const rules = document.getElementById('rules')
const start = document.querySelector('.start')
let i = 0

function cont(i){
    if (i === 0 ) {
        return 'Ice Cream';
    } else if (i === 1) {
        return 'Cheese';
    } else if (i === 2) {
        return 'Corn';
    } else if (i === 3) {
        return 'Wheat';
    } else if (i === 4) {
        return 'Milk';
    } else if (i === 5) {
        return 'Dogs';
    } else if (i === 6) {
        return 'Cats';
    } else if (i === 7) {
        return 'Phones';
    } else if (i === 8) {
        return 'Computers';
    } else if (i === 9) {
        return 'Shoes';
    } else if (i === 10) {
        return 'Cars';
    } else if (i === 11) {
        return 'Medicine';
    } else if (i === 12) {
        return 'Housing';
    } else {
        cover.classList.remove('hide');
        cover.classList.add('cover');
        return 'Housing';
    }
};

topChoice.addEventListener('click', e => {
    next = cont(i)
    let HTML = `
    <div class="container choice my-4 rounded" id="bot">
        <h5 class="text-center">${next}</h5>
    </div>`
    botChoice.innerHTML = HTML
    i++
    topChoice.classList.remove('top')
    topChoice.classList.add('top-push')
    setTimeout(() => {
        topChoice.classList.remove('top-push')
        topChoice.classList.add('top')
    }, 75);
});

botChoice.addEventListener('click', e => {
    next = cont(i)
    let HTML = `
    <div class="container choice my-4 rounded" id="top">
        <h5 class="text-center">${next}</h5>
    </div>`
    topChoice.innerHTML = HTML
    i++
    botChoice.classList.remove('bottom')
    botChoice.classList.add('bot-push')
    setTimeout(() => {
        botChoice.classList.remove('bot-push')
        botChoice.classList.add('bottom')
    }, 75);
});

cover.addEventListener('click', e =>{
    location.reload()
})

start.addEventListener('click', e => {
    rules.classList.remove('rules')
    rules.classList.add('hide')

})

// const greyOut = function(loc, locChoice, push){
//     locChoice.classList.remove(loc)
//     locChoice.classList.add(push)
//     setTimeout(() => {
//         locChoice.classList.remove(push)
//         locChoice.classList.add(loc)
//     }, 75);   
// }
 
