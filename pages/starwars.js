fetch('https://swapi.dev/api/people/')
.then(resp => resp.json())
.then(data => console.log(data))
