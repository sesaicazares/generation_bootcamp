// escriba el ciclo anidado que impirma el siguiente patrón.

/*

*
* *
* * *
* * * *
* * * * *

*/

for(let i=1; i<=5; i++){        //1  //2
    for(let j=1; j<=i; j++){    //5  //5
        document.write('*');
        //console.log('ciclo hijo\n');
    }

    document.write('<br>');
}