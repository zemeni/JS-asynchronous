const api = "https://jsonplaceholder.typicode.com/posts";
//the whole purpose is to get rid of .then chaining inside async function
const getTodos = async (resource) => {
    const response = await fetch(resource);
    const data = await response.json(); //since .json method also returns promise
    // console.log(data[0]);
    return data;
}

// getTodos(api);
// const result = getTodos(api);
// console.log(result); //returns promise

//but we need to do .then atleast once
getTodos(api).then(data => console.log(data[0]));