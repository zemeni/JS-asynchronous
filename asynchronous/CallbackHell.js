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

/*
const renderPost = post => {
    console.log(post);
}
const getCountryData = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
            console.log(data[0]);
            return fetch(`https://jsonplaceholder.typicode.com/posts`);
        }).then(response => response.json())
        .then(data => renderPost(data[1]))
}
getCountryData();*/

//handling rejected promises

/*const renderError = function (err){
    console.log("error",err.message);
}

fetch(`https://jsonplaceholder.typicode.com/postsabc`)
    .then(res => {
        if(!res.ok)
            throw new Error(`Posts not found ${res.status}`);
        return res.json();
    })
    .then(data => console.log(data[0]))
    .catch(err => renderError(err))
    .finally("finally executed");*/
/*try {
    const post = async function () {
        const res = await fetch(`https://jsonplaceholder.typicode.com/post`);
        if (!res.ok)
            throw new Error(`error status ${res.status} and ${res.message}`)
    }
} catch
    (err) {

}
post().then(data => console.log(data[0]));
console.log('first');*/

//using axios
import 'regenerator-runtime/runtime';
import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async function (){
    const {data} = await axios.get(`${BASE_URL}`);
    console.log(data[0]);
}

const post = {
    title:'title',
    body:'body'
};

const createPost = async () => {
    const {data} = await axios.post(BASE_URL, post);
    console.log(data);
}

const fakePosts = [];
const deletePost = async post => {
    let posts = fakePosts;
    try {
        posts.filter(p => p.id != post.id);
        await axios.delete(BASE_URL + '/' + post.id);
    }catch (ex){
        posts = fakePosts;
    }
}

createPost();
createPost();
createPost();

getPosts();

deletePost(post);

getPosts();


