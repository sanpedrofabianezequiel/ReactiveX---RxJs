import { interval,from } from "rxjs";
import { take, tap, scan, reduce,map } from 'rxjs/operators';

const numbers  = [1,2,3,4,5];

const totalReducer = (acumalador:number,current:number)=>{
    return acumalador + current;
}

from(numbers).pipe(
    reduce(totalReducer,0)
).subscribe(console.log)



from(numbers).pipe(
    scan(totalReducer,0)
).subscribe(console.log)


//redux
interface Usuario {
    id?:string;
    autenticado?:boolean;
    token?:string;
    edad?:number;
}

const user: Usuario[] =[
    {id:'eze',autenticado:false,token:null},
    {id:'eze',autenticado:true,token:'ABC'},
    {id:'eze',autenticado:true,token:'ABC123'},
]

const state$ = from(user).pipe(
    scan<Usuario,Usuario>((acc,curr)=>{
        return {...acc,...curr}
    },{edad:33})
);

const id$= state$.pipe(
    map(state=>state)
);

id$.subscribe(console.log);
