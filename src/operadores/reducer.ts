import { interval } from "rxjs";
import {take,tap,reduce} from 'rxjs/operators';

const numbers  = [1,2,3,4,5];

const totalReducer = (acumalador:number,current:number)=>{
    return acumalador + current;
}

const total = numbers.reduce(totalReducer,0);
console.log(total);

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer,0)
).subscribe({
    next:val=>console.log(val),
    complete:()=>console.log('complete')
})