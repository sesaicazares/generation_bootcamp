const dataImage = [
    "https://w0.peakpx.com/wallpaper/783/909/HD-wallpaper-anime-cat-girl-room-computer-animal-ears-coffee-cute-anime.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/492/504/1021/original-characters-anime-girls-room-manga-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/861/465/119/anime-room-computer-hd-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/684/776/1009/computer-headphones-anime-girls-hd-wallpaper-preview.jpg"
]

const back = document.querySelector(".register-bg")
let contador = parseInt(Math.random() * 4)
back.style.backgroundImage = `url(${dataImage[contador]})`

back.addEventListener("click",(e)=>{
    contador++
    if(contador==4) contador=0
    e.target.style.backgroundImage = `url(${dataImage[contador]})`
})