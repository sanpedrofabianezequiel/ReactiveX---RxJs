import {fromEvent,Observable, Observer,Subject} from 'rxjs';

const observer : Observer<any> = {
    next: (value:any)=>console.log('next',value),
    error: (value:any)=>console.log('error',value),
    complete:()=>console.log('Complete')
}

const obs$ = fromEvent<PointerEvent>(document,'click');
const obs2$ = fromEvent<KeyboardEvent>(document,'keyup');

obs$.subscribe(
    ({x,y}) => console.log(x,y)
);

obs2$.subscribe((event)=>{
    console.log(event.key)
});