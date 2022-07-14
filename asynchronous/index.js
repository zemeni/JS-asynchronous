//this is asynchronous code, that executes from top to bottom but if found any asynchronous code
//will jump to the next line leaving the async code to execute in background
const p = document.querySelector("#demo");
setTimeout(()=>{
    p.textContent = 'My name is Babu';
},5000);
p.style.color="red";