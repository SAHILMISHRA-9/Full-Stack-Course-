// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         const imageElement=document.createElement('img')
//         imageElement.src=data.message
//         imageElement.alt='random dog picture'
//         document.getElementById('img-container').appendChild(imageElement)
//     })

async function getSuggestion() {
    const response= await fetch('https://apis.scrimba.com/bored/api/activity')
    const data =await response.json()
    console.log(data)
}
getSuggestion()
    