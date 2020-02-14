console.log('Client side JS')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#msg-1')
const messageTwo = document.querySelector('#msg-2')



weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    const location = search.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    const url = '/weather?address='+location
    
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                console.log(data.location)
                messageOne.textContent = data.location

                console.log(data.forecast)
                messageTwo.textContent = data.forecast
            }
        })
    })

})