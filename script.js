// ID

// const p = document.getElementById("my-first-p")

// console.log(p)

// console.log(p.innerText)

// p.style.color = 'blue'

// p.style.fontSize = '20px'

// p.innerHTML = 'Another Text'

// const secondP = document.getElementById("my-second-p")

// console.log(secondP)

// List - Classname and Tagname

// const allTextElements = document.getElementsByClassName("text-class")

// console.log(allTextElements)

// const allPElements = document.getElementsByTagName("p")

// console.log(allPElements)

// Query Selector

// const getPQuery = document.querySelector("p.text-class")

// console.log(getPQuery)

// const getAllPQuery = document.querySelectorAll("p.text-class")

// console.log(getAllPQuery)

// Create Elements

// const span = document.createElement("span")

// span.innerText = "Esse é um elemento adicionado através de Javascript"

// console.log(span)

// document.body.appendChild(span)

// document.body.replaceChild(span, p)

// document.write('oi')

// document.write(`<ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>`)

// p.appendChild(span)

// Window

// window.open("https://www.google.com", "_blank", "width=400, height=400")

// console.log(window.innerWidth, window.innerHeight)

// Function to call on events

function showAlert(t) {
  console.log(t)
  t.style.backgroundColor = "red"
  alert("Button clicked!")
}

function testKeyDown(event) {
  console.log("Key down:", event)
}

function save(event) {
  event.preventDefault()
  // Logica validar dados
  // Mandar para API
  // Feedback para o usuario
}