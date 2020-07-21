//ASYNC AND AWAIT

const days = [];
async function Weekdays(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let n=prompt("enter the range:");
            for(let i=0;i<n;i++)
            days.push(prompt("enter the days:"));
            resolve('days are listed');
        },3000)
    })

    let result = await status;
    console.log(days);
}

Weekdays();