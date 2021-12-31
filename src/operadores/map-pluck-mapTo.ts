import {range,fromEvent } from 'rxjs';
import { map,pluck,mapTo} from 'rxjs/operators';


/*range(1,5).pipe(
    map<number,number>((item)=>{
        return item * 10
    })
).subscribe(console.log)*/

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event=>event.code)
)

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
)

const keyupMapTo = keyup$.pipe(
    mapTo('tecla presionada')
)

keyup$.subscribe(code =>console.log(code));
keyupCode$.subscribe(code =>console.log('map',code));
keyupPluck$.subscribe(code =>console.log('pluck',code));
keyupMapTo.subscribe(code =>console.log('mapTo',code));