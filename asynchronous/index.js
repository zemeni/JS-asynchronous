//this is asynchronous code, that executes from top to bottom but if found any asynchronous code
//will jump to the next line leaving the async code to execute in background
/*
const p = document.querySelector("#demo");
setTimeout(()=>{
    p.textContent = 'My name is Babu';
},5000);
p.style.color="red";*/

//call back function alone doesn't make the code async
// [1,2,3].map(v => console.log(v*2));

//in JS loading an image is async
/*const img = document.querySelector("#img");
img.src="https://cdn.pixabay.com/photo/2016/03/30/21/59/coffee-beans-1291656_960_720.jpg";
// img.src="https://cdn.pixabay.com/photo/2016/04/12/11/19/coffee-1324126_960_720.jpg";
img.addEventListener('load',() => {
   img.classList.add('fadeIn');
   console.log("yes")
},10000);
img.style.width='300px';*/

//addEventListener doesn't automatically make code async
//callback func doesn't automatically make code async

/*
LoadingImage,setTimeout, ajax call makes code async
*/

