document.addEventListener("DOMContentLoaded", function() {

//Function to increment/decrement the page. uses a callback function to fetchPage function
function handlePage(){
    let backBtn = document.querySelector('#back')
    let forwardBtn = document.querySelector('#forward')    
    let pageNumber =1

    forwardBtn.addEventListener('click', function(){
        pageNumber = pageNumber +1
        document.querySelector('#monster-container').innerHTML = ''
        //console.log(pageNumber)
        fetchPage(pageNumber)
    })

    backBtn.addEventListener('click', function(){
        if(pageNumber === 1) {
            return;
        } else {
            pageNumber = pageNumber -1
            document.querySelector('#monster-container').innerHTML = ''
            //console.log(pageNumber)
            fetchPage(pageNumber)
        }
    })
    //console.log(pageNumber)
}

function fetchPage(currentPage=1){
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${currentPage}`)
    .then(resp => resp.json())
    .then(function(data){
        function findProp(obj, prop) {
            let result = [];
            function recursivelyFindProp(o, keyName) {
              Object.keys(o).forEach(function(key) {
                if(typeof o[key] === 'object') {
                  recursivelyFindProp(o[key], keyName);
                } else {
                  if (key === keyName) result.push(o[key]);
                }
              });
            }
            recursivelyFindProp(obj, prop);
            return result;
          }
          let monsterNames = findProp(data, "name")
          let monsterAges = findProp(data, "age")
          let monsterDesc = findProp(data, "description")
          //console.log(monsterNames, monsterAges, monsterDesc) //working

          for(i=0; i<data.length; i++) {
              createDisplayInfo(monsterNames[i], monsterAges[i], monsterDesc[i])
          }

    })
}

//function that gets used to display one monster's information (this gets called back within fetchPage function)
function createDisplayInfo(name, age, description) {
    let div = document.createElement('div')
    div.innerHTML = `
    <h2>${name} </h2>
    <h4>Age: ${age} </h4>
    <p>Bio: ${description}</p>     
    `
    document.querySelector('#monster-container').append(div)
}

fetchPage() //render initial 50 monsters to the page
handlePage() //enables the button click

//create the form so that we can add monster
let form = document.createElement('form')
form.setAttribute("id","monster-form")
form.innerHTML = 
`<input id='name' placeholder='name...'>
 <input id='age' placeholder='age...'>
 <input id='description' placeholder='description...'>
 <button>Create</button>`

document.querySelector('#create-monster').append(form)

addEventListener('submit',function(e){
  e.preventDefault()
  fetch("http://localhost:3000/monsters",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      name: document.querySelector("#name").value,
      age: document.querySelector("#age").value,
      description: document.querySelector("#description").value
    })
  })

})


}) //end of DOM Loads


