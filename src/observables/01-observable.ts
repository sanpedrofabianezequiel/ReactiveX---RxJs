import {Observable, Observer} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}

const obs$ = new Observable<string>( (sub)=>{

    sub.next('Hello');
    sub.next('Hello2');
    sub.complete();
    sub.next('No se mostrara');
});


obs$.subscribe(observer);






