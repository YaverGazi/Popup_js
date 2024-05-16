const btn=document.querySelector('.btn');
const cakevideo=document.querySelector('.cakevideo')
const closeicon=document.querySelector('.closeicon')

const video=document.querySelector('video')

closeicon.addEventListener('click',()=>{
    cakevideo.classList.add('active') 
})
btn.addEventListener('click',()=>{
    cakevideo.classList.remove('active')
video.pause();
video.currentTime=0
})