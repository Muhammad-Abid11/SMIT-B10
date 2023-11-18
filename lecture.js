/* 
1.Asynchoronous(Chaltay hain thora wait kr k)
e.g fetch(), setTimeout(), setInterval(), firebase methods etc.
    i)request ii)response
2.Synchoronous(Chalta hi apna kam kardia)
e.g console.log , alert , etc
*/



// Async code always work at the end of Sync code 
// Aync hamesha promise return krta hai
console.log("1")
setTimeout(()=>{
    console.log("2") 
},0)
console.log("3")
//1
//3
//2


const promise = new Promise((resolve, reject) =>{
    // here we also run Fetch
    setTimeout(()=>{
        resolve('I am a resolved promise');
    },3000)
})
promise.then((res)=>{
console.log(res)
})

// but now we use Async

async function getResponse() {
    const promise = await new Promise(resolve => {
      setTimeout(() => {
        resolve('I am a resolved promise');
      }, 3000);
    });
    console.log(promise);
  }
  
  getResponse();
  
