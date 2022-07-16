/*const getSomething = ()  => {
    return new Promise((resolve, reject) => {
        resolve("data");
        // reject("error");
    });
};

//then is a callback function which takes data passed through the resolve function
getSomething().then(data => {
    console.log("promise resolved", data);
}, err => {
    console.log("promise rejected", err);
});

//the above function can be written as::
getSomething().then(data => console.log(data))
    .catch(err => console.log(err)); //catch method is called when promise is rejected*/

//example
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("promise rejected:");
            }
        });
        request.open('GET', resource);
        request.send();
    })
}

const api = "https://jsonplaceholder.typicode.com/posts";
getTodos(api)
    .then(data => {
        console.log("promise 1 resolved", data[0]);
        return getTodos(api);
    }).then(data => {
    console.log("promise 2 resolved", data[1]);
    return getTodos(api);
}).then(data => {
    console.log("promise 3 resolved", data[2]);
}).catch(err => console.log(err));