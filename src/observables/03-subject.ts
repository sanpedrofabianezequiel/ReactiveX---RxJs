import {Observable, Observer,Subject} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}

const intervalo$ = new Observable<number>((x)=>{

    const time = setInterval(() => {
        x.next(Math.random())
    }, 2000);

    return ()=>{
        clearInterval(time);
        console.log('Intervalo destruido')
    }
});

const sub$ = new Subject();
const stopIntervel = intervalo$.subscribe(sub$);


const sub1 = sub$.subscribe(x=>console.log('a',x));
const sub2 = sub$.subscribe(x=>console.log('a',x));

setTimeout(() => {
    sub$.next('Ejecutando');
    sub$.complete();
    stopIntervel.unsubscribe();
}, 3000);    