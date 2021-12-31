import {range,from, fromEvent} from 'rxjs';
import {filter,map} from 'rxjs/operators';

/*range(1,10).pipe(
    filter<number>(val => val%2 === 1)
).subscribe(console.log)*/

/*range(20,30).pipe(
    filter<number>((item,index)=>{
        console.log('Index',index);
        return item % 2 === 1
    })
).subscribe(console.log)*/
interface heroes {
    tipo:string;
    nombre:string
}

const personajes:heroes[]= [
    {
        tipo:'heroe',
        nombre:'batman'
    },
    {
        tipo:'heroe',
        nombre:'robin'
    },
    {
        tipo:'villano',
        nombre:'Joker'
    }
]

from(personajes).pipe(
    filter<heroes>( x=> x.tipo === 'heroe')
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map<KeyboardEvent, string>(event => event.code),
    filter(key => key === 'Enter')
)

keyup$.subscribe(console.log)