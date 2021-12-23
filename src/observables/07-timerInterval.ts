import {timer,interval, Observer} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5 );
const obs1$ = interval(1000);
//obs1$.subscribe(observer);

//const obs2$ = timer(2000);
//const obs2$ = timer(2000,1000);
const obs2$ = timer(hoyEn5);
console.log('Asincrono')
obs2$.subscribe(observer)
console.log('Fin Asyncrono')