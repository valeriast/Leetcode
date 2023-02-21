'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
     let addHashtag = n-1;
    let line = ''
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(j == addHashtag || j>addHashtag ){
                line = line + '#' 
            }else{
                line = line + ' '
            }
        }
        addHashtag--;
        console.log(line)
        line = ''
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
