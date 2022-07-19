let messages = document.querySelector('.messages')
let form = document.querySelector('[name="message"]')

const h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
h1.className = "header"

document.getElementById("header").appendChild(h1)

const span = document.createElement('span')
span.textContent = 'daniel'
span.classList.add('span1')

const span2 = document.createElement('span')
span2.textContent = 'wrote in javascript'
span2.classList.add('span2')

h1.appendChild(span)
h1.appendChild(span2)

const h2 = document.createElement("h2")
h2.className = "subTitle"
h2.id = 'subTitle'

h1.appendChild(h2)


messages[0].textContent = "Hope you are having a great day!";
messages[1].textContent = "Thank you!";
messages[2].textContent = "No problem";
messages[3].textContent = "You too!";

document.getElementById("clear-button").addEventListener('click', function() {
    messages.innerHTML = ''
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let newMessage = document.createElement('div')
    newMessage.classList.add('message')
    newMessage.textContent = document.getElementById('input').value

    let addedMessages = document.querySelectorAll('.message')

    if (addedMessages.length % 2 === 0) {
        newMessage.classList.add('left')
    } else newMessage.classList.add('right')
    
    document.getElementById('input').value = ''

    messages.appendChild(newMessage)

})

