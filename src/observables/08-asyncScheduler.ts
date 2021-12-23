import {asyncScheduler, Observer} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}

//setTimeOut in this case we can use arrow function
//setInterval in this case we JUST can use function traditional


const saludar  = ()=>console.log('Hola Mundo');
const saludar2 = (x)=>console.log(`Hola ${x}`);

//const obs$ = asyncScheduler.schedule(saludar,2000);
//asyncScheduler.schedule(saludar2,1000,'ezequiel');

const subs =  asyncScheduler.schedule(function (params) {
    
    console.log(params);
    this.schedule(params + 1,100 );
},3000,0)//  (function, timer, state)

//First form to UnSubscribe
/*setTimeout(() => {
    subs.unsubscribe();
}, 8000);*/


asyncScheduler.schedule(()=>subs.unsubscribe(),1000)
