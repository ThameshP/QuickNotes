
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
const fetchNotes = ()=>{


const user = JSON.parse(localStorage.getItem('user'))
if(!user){
  window.location= "/login"
}


if(user.email && user){
  let noteContainer = document.querySelector(".myNotes")
  noteContainer.innerHTML = ""
const notes = postData('/getnotes', {email: user.email})

//This will populate the notes
notes.then((notes)=>{
  console.log("Notes", notes.notes)
  notes.notes.forEach(element => {


  let note =
  `
  <div class="card" style="width: 250px; margin: 20px; padding: 10px; display: flex; justify-content: space-between; flex-wrap: wrap;">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.desc}</p>
      <a href="#" class="btn btn-primary">Edit</a>
      <button type="submit" id="delete" class="btn btn-primary">Delete</button>

    </div>
  </div>

  `
noteContainer.innerHTML += note
});


})

}

else {
  alert("Login first!")
}


}

fetchNotes()
//Add a click listener for submit
let submit = document.getElementById('submit')
submit.addEventListener("click", async ()=> {
  let title = (document.getElementById('title').value)
  let desc = (document.getElementById('desc').value)
  //Getting the User from Local Storage and JSON parsing it.
  let email = JSON.parse(localStorage.getItem("user"))?.email
  console.log("Submitting this data", title, desc, email)
  let resp = await postData("/addnotes", {title, desc, email})
  if(resp.success){
    alert("Note Created.")
    //Making values blank after creation
    document.getElementById('title').value = ""
    document.getElementById('desc').value = ""
    fetchNotes()



  }

})
