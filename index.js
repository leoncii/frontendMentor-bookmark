const fetch = require('node-fetch')
// const data = [
//   {
//     id : 1,
//     "name": 'leo'
//   },
//   {
//     id : 2,
//     name: 'hola'
//   },
// ]
function traerData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

traerData()


// console.log(data[0].name)