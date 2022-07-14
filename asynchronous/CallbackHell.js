//callback hell
/*setTimeout(()=>{
    console.log("1 sec passed");
    setTimeout(()=>{
        console.log("2 sec passed");
        setTimeout(()=>{
            console.log("3 sec passed");
        },3000);
    },20000);
},1000);*/

//solution to callback hell is promises -> modern js features
//fetch -> new way of calling api

//we no longer need to rely on events and callbacks passed into asynchronous function to handle
//asynchronous result

//chaining promises

const renderPost = post => {
    console.log(post);
}
const getCountryData = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
            console.log(data[0]);
            fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => response.json())
                .then(data => renderPost(data[1]))
        });
}
getCountryData();