// const links = document.querySelectorAll("lisst")

// links.forEach(nav => {
//     nav.addEventListener('mouseenter', ()=>{
//         nav.nextElementSibling.classList.remove("display-none")
//     })
// })

// links.forEach(nav => {
//     nav.addEventListener('mouseleave', ()=>{
//         nav.nextElementSibling.classList.add("display-none")
//     })
// })

const nav1 = document.getElementById('lisst')
const listing = document.getElementById("listt")

nav1.addEventListener('mouseenter', function(){
    listing.style.display = "flex";
})

nav1.addEventListener('mouseleave', function(){
    listing.style.display = "none";
})

const nav2 = document.getElementById('list2')
const listing1 = document.getElementById("listt2")

nav2.addEventListener('mouseenter', function(){
    listing1.style.display = "flex";
})

nav2.addEventListener('mouseleave', function(){
    listing1.style.display = "none";
})

const nav3 = document.getElementById('list3')
const listing2 = document.getElementById("listt3")

nav3.addEventListener('mouseenter', function(){
    listing2.style.display = "flex";
})

nav3.addEventListener('mouseleave', function(){
    listing2.style.display = "none";
})

const nav4 = document.getElementById('list4')
const listing3 = document.getElementById("listt4")

nav4.addEventListener('mouseenter', function(){
    listing3.style.display = "flex";
})

nav4.addEventListener('mouseleave', function(){
    listing3.style.display = "none";
})

const nav5 = document.getElementById('list5')
const listing4 = document.getElementById("listt5")

nav5.addEventListener('mouseenter', function(){
    listing4.style.display = "flex";
})

nav5.addEventListener('mouseleave', function(){
    listing4.style.display = "none";
})

const nav6 = document.getElementById('list6')
const listing5 = document.getElementById("listt6")

nav6.addEventListener('mouseenter', function(){
    listing5.style.display = "flex";
})

nav6.addEventListener('mouseleave', function(){
    listing5.style.display = "none";
})
