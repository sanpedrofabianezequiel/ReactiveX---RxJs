import {Observable, Observer} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}

const intervalo$ = new Observable<number>( x =>{
    let valor = 0
    const inter = setInterval(()=>{
        x.next(valor);
        valor++;
    },1000)

    return ()=>{
        clearInterval(inter);
    }
})

const subs1 = intervalo$.subscribe(observer)

const subs2 = intervalo$.subscribe(observer)

const subs3 = intervalo$.subscribe(observer)

subs1.add(subs2)
    
setTimeout(() => {
    subs1.unsubscribe();
}, 3000);