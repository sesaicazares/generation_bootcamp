const URL = 'https://jsonplaceholder.typicode.com/albums/1/photos'
const containerCard = document.querySelector('#container-cards')

window.fetch(URL).then(r => r.json()).then(d => {
  console.log(d)
  d.forEach(data => {
    const card = `<div class="col mb-4">
    <div class="card">
      <img src=${data.url} class="card-img-top" alt=${data.title}>
      <div class="card-body">
        <p class="card-text">${data.title}</p>
      </div>
    </div>
  </div>`
    containerCard.innerHTML += card
  })
})
