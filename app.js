
const emailRef = document.querySelector(".email");

// // retrieving data from a mock database, and JSON data source 

// // (1) Using then method

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         emailRef.innerHTML = data.email
//     });


// // (2) Using async/await

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json();
    emailRef.innerHTML = data.email
    //console.log(data)
}

main()
