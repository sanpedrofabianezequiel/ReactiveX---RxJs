#  RXJS


```
Recorrer un objecto con FROM + FILTER + PIPE




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


```


