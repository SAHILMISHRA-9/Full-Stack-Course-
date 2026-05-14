function preLoadImg(url){
    return new Promise((resolve,reject)=>{
        const img = new Image()
        img.src=url
        img.alt= "a beautiful scene"
        img.addEventListener('load',()=> resolve(img))
        img.addEventListener('error', ()=> reject('Img not loaded'))
    })
}

async function loadImage() {
    try {
        const result = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
        console.log(result)
        document.getElementById('img-container').appendChild(result)
    } catch (error) {
        console.log(error)
    }
}

loadImage();