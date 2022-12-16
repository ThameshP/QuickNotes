
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

//fetch Notes
const user = JSON.parse(localStorage.getItem('user'))
// if(!user.token || !user){
//   window.location= "/login"
// }
//const notes = postData('/getnotes', {token: user.token})

//This will populate the notes
// notes.then((notes)=>{
//   console.log("Notes")
// })

//Add a click listener for submit
let submit = document.getElementById('submit')
submit.addEventListener("click", ()=> {
  let title = (document.getElementById('title').value)
  let desc = (document.getElementById('desc').value)
  console.log("Submitting this data", title, desc)
})
