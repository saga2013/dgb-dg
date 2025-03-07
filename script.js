const card = document.getElementById('card')
const btn = document.createElement('button')
btn.textContent='Сменить пользователя'
btn.style.backgroundColor='blue'
btn.style.width='150px'
btn.style.height='50px'
btn.style.color= 'white'

async function fetchApi() {
try{
    const url =  await fetch('https://randomuser.me/api/')
    const res = await url.json()
    const data = await res.results[0]
    card.innerHTML=`
    <img src="${data.picture.large}" alt="">
    <h1>${data.name.first}, ${data.name.last}</h1>
    <h2>${data.email}</h2>
    <h3>Номер: ${data.phone}</h3>
   <h3>Адрес: ${data.location.street.number} ${data.location.street.name}</h3>         
    `
    card.appendChild(btn)

        
}catch(error){
    console.log('Ошибка', error)
}
    
}

fetchApi()
btn.addEventListener('click', fetchApi)