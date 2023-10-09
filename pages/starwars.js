fetch('https://swapi.dev/api/people/')
.then(resp => resp.json())
.then(data => console.log(data))

// // Define the async function
// async function getapi(url) {
   
//     // Storing response
//     const response = await fetch(url);
   
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
    
//     show(data);
// }
// // Calling that async function
// getapi('https://swapi.dev/api/people/');
 

// // Function to define innerHTML for HTML table
// function show(data) {
//     let tab = 
//         `<tr>
//           <th>Name</th>
//           <th>Height</th>
//           <th>Mass</th>
//           <th>Hair Color</th>
//           <th>Skin Color</th>
//           <th>Eye Color</th>
//           <th>Birth Year</th>
//           <th>Gender</th>
//          </tr>`;
   
//     // Loop to access all rows 
//     for (let r of data.people) {
//         tab += `<tr> 
//     <td>${r.name} </td>
//     <td>${r.height}</td>
//     <td>${r.mass}</td> 
//     <td>${r.hair_color}</td>  
//     <td>${r.skin_color}</td>           
//     <td>${r.eye_color}</td>    
//     <td>${r.birth_year}</td>    
//     <td>${r.gender}</td>    
// </tr>`;
//     }


// }