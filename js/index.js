document.addEventListener("DOMContentLoaded", function() {
//Test for button working

function handlePage(){
    let backBtn = document.querySelector('#back')
    let forwardBtn = document.querySelector('#forward')    
    let pageNumber =1

    forwardBtn.addEventListener('click', function(e){
        e.preventDefault()
        pageNumber = pageNumber +1
        console.log(pageNumber)
    })

    backBtn.addEventListener('click', function(e){
        e.preventDefault()
        if(pageNumber === 1) {
            return;
        } else {
            pageNumber = pageNumber -1
            console.log(pageNumber)
        }
    })
    //console.log(pageNumber)
}

// function fetchPage(currentPage){
//     fetch(`http://localhost:3000/monsters/?_limit=50&_page${currentPage}`)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
// }

handlePage()

// fetchData(handlePage)

    // fetch("http://localhost:3000/monsters")
    // .then(resp => resp.json())
    // .then(function(data) {

    //     function findProp(obj, prop) {
    //         let result = [];
    //         function recursivelyFindProp(o, keyName) {
    //           Object.keys(o).forEach(function(key) {
    //             if(typeof o[key] === 'object') {
    //               recursivelyFindProp(o[key], keyName);
    //             } else {
    //               if (key === keyName) result.push(o[key]);
    //             }
    //           });
    //         }
    //         recursivelyFindProp(obj, prop);
    //         return result;
    //       }
    //       let monsterNames = findProp(data, "name")
    //       let monsterAges = findProp(data, "age")
    //       let monsterDesc = findProp(data, "description")
          //console.log(monsterNames, monsterAges, monsterDesc) //working

          //Test for output is in increments of 50
        //   for(j=1; j<Math.ceil(data.length/50)+1; j++) {
        //       for(i = 0; ((i*1)+(j*50)-1) <50*j; i++) {
        //           console.log("page ",j)
        //         for(k=0; k<50; k++) {
        //             m = (j-1)*50+k
        //             if(m===data.length){
        //                 return;
        //             } else{
        //                 console.log(m)
        //             }
        //         }
        //       }
        //   }

    //})// end of second .then








}) //end of DOM Loads


