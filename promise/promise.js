console.log("Race is starting....");
// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(3);
//     },1000)
// })

// firstPromise.then((result)=>{
//     console.log(result);
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             resolve(2);
//         }, 2000)
//     })
// })
// .then((result)=>{
//     console.log(result);
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve(1);
//         }, 3000)
//     })
// })
// .then((result)=> {
//     console.log(result);
//     return new Promise((resolve, reject)=> {
//         resolve("Goooooo");
//     })
// })
// .then((result)=>{
//     console.log(result);
// })


// rewriting thr same code using delay funtion


//funtion to start delays

const delay = (ms, value) =>  new Promise(resolve => setTimeout(() =>resolve(value) ,ms))

let elementCreator = (text) => {
    let element = document.createElement("H4");
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    element.style.color='black';
    element.style.backgroundColor=randomColor;
    element.style.fontFamily = 'Arial, sans-serif';  // Font family
    element.style.fontSize = '36px';  // Font size
    element.style.padding = '20px';  // Padding inside the H1
    element.style.textAlign = 'center';  // Center the text
    element.style.borderRadius = '10px';  // Rounded corners
    element.style.boxShadow = '2px 2px 12px rgba(0, 0, 0, 0.2)';  // Shadow effect
    element.style.margin = '20px';  // Space around the element


    element.textContent=text;
    document.body.append(element);
}
delay(0, "Race is starting....")
.then((value)=> 
{   elementCreator(value);
    return delay(3000,3)
})

.then((value)=> { 
    elementCreator(value);
    return delay(2000,2);
})
.then((value)=> {
    elementCreator(value);
    return delay(1000,1);
})
.then((value)=> {
    elementCreator(value);
    return delay(1000,"Goooooooo !!!!");
})
.then((value)=> {
    elementCreator(value);
})
.catch((value)=> {
    console.log("error occured");
})
