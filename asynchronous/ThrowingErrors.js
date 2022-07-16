const api = "https://jsonplaceholder.typicode.com/postsadd";
const getTodos = async (resource) => {
    const response = await fetch(resource);
    //fetch don't reject the promise unless network error. so we need to manually throw error
    if(response.status !== 200)
        throw new Error();
    const data = await response.json();
    return data;
}

getTodos(api)
    .then(data => console.log(data[0]))
    .catch(err => console.log("promise rejected",err.message));