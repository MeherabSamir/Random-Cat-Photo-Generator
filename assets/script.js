// Selecting Elements
const btn = document.querySelector('.btn')
const img   = document.querySelector('.img-container img')

// Event Listener
btn.addEventListener('click',()=>{
    const api =  "https://thatcopy.pw/catapi/rest/"
    fetch(api)
    .then(blob => blob.json())
    .then(data => {
        img.src = data.webpurl
        console.log(data)
    })
})