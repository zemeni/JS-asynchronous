const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',() => {
        //convert json string to javascript object
        const data = JSON.parse(request.responseText);
        if(request.readyState===4 && request.status===200){
            callback(undefined, data);
        }else if(request.readyState===4){
            callback('An error occurred', undefined);
        }
    });
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

console.log(1);
console.log(1);

getTodos((err,data) => {
    console.log("callback fired");
    if(err)console.log(err);
    else console.log(data);
});

console.log(3);
console.log(4);