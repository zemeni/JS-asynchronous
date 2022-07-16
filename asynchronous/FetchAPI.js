const api = "https://jsonplaceholder.typicode.com/posts";

//with fetch api the promise is only rejected when we have network error
const promise = fetch(api)
    .then(response => {
        return response.json(); //this returns promise
    }).then(data => console.log(data[0]))
    .catch(err => console.log("error occurred",err));