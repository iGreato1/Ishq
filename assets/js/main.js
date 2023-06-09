const dateTime = new Date()

// Print Date
const date = document.querySelector('#date')
date.innerHTML += `
    <p class="date"><span class="day">${dateTime.toLocaleDateString("ar-SA", {day: 'numeric'})}</span>/<span class="month">${dateTime.toLocaleDateString("ar-SA", {month: 'numeric'})}</span>/<span class="year">${dateTime.toLocaleDateString("ar-SA", {year: 'numeric'})}</span></p>
`

// Print Time
let timeNow = document.querySelector('.dateTime #time')
let hourNow = 0;
let amPm = '';
if (dateTime.getHours() !== 0) {
    if (dateTime.getHours() > 12) {
        hourNow = dateTime.getHours() - 12;
        amPm = 'مساء'
    } else {
        hourNow = dateTime.getHours();
        amPm = 'صباحا'
    }
} else {
    hourNow = 12;
    amPm = 'صباحا'
}
let mintNow = '';
if (dateTime.getMinutes() < 10) {
    mintNow += String(dateTime.getMinutes())
} else {
    mintNow = String(dateTime.getMinutes())
}
timeNow.innerHTML += `
    <p class="time"><span class="hours">${String(hourNow < 10 & hourNow > 0 ? `0${hourNow}` : hourNow.toString())}</span>:<span class="mints">${String(mintNow < 10 & mintNow > 0 ? `0${mintNow}` : mintNow.toString())}</span> <span class="amPm">${amPm}</span></p>
`;

let menuBtn = document.querySelector('.nav .headerControling')
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('active')
    })

    document.querySelectorAll('.nav ul li a').forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('.nav').classList.remove('active')
        })
    })
}

// let imgShowenBtn = document.querySelector('.swiper img.imgShowen')
// let imgHiddenBtn = document.querySelector('.imagesPreview .close')
// if (imgShowenBtn) {
//     imgShowenBtn.addEventListener('click', () => {
//         document.querySelector('.imagesPreview').classList.add('active')
//         document.querySelector('.imagesPreview .main').src = `${document.querySelector('.swiper .swiper-slide-active').firstChild.src}`
//         document.querySelector('body').classList.add('imgShown')
//     })
// }
// if (imgHiddenBtn) {
// }
// imgHiddenBtn.addEventListener('click', () => {
//     document.querySelector('.imagesPreview').classList.remove('active')
//     document.querySelector('body').classList.remove('imgShown')
// })