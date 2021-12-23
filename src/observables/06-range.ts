import { asyncScheduler, range } from "rxjs";

const obs$ = range(1,5,asyncScheduler);
console.log('Inicio');
obs$.subscribe((x)=>{
    console.log(x)
})
console.log('Fin')