import {of,Observable, Observer,Subject} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}

const obs$ = of<any>(...[1,2,3,4,5],6,7,8,9);

console.log('Inicio Sincrono');
obs$.subscribe(
    next => console.log('next',next),
    null,
    () => console.log('complete'),
)

console.log('Fin Sincrono');

