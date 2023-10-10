const results = document.querySelector('#results');

async function asyncFetch(value){
    const res = await fetch(`https://swapi.dev/api/${value}/`,{

method: "GET",
        headers: {
Origin:   "http://127.0.0.1:5500",         
// "Access-Control-Allow-Origin": "*",
           
            
        }
    })
    const data = await res.json();
    displayResults(data, value);
    console.log(data);
}

function displayResults(data, value){

let output = "";
console.log(data);
if (value === 'people'){
    data.results.forEach(item =>(
        output += `
        <div>
        <h4>${item.name}</h4></div>
        `

    ))
}
results.innerHTML = output;
}

// event listener for buttons
document.getElementById('buttons').addEventListener('click', e =>{
    asyncFetch(e.target.textContent.trim().toLowerCase());
})