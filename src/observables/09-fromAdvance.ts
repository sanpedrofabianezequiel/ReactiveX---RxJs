import {from,of, Observer} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const miIterable = miGenerador();
from(miIterable).subscribe(observer);


const obs$ = from<Promise<Response>>(fetch('https://api.github.com/users/klerith'));

obs$.subscribe(async (resp)=>{

    const data = await resp.json();
    console.log(data);
})