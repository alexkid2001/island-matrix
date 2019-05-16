let matrix = [ 
    [0,0,1,0],
    [1,0,1,1],
    [0,0,0,1],
    [1,0,0,0],
    [0,1,0,0]
];

let cloneMatrix = JSON.parse(JSON.stringify(matrix));
let islandCnt = 0;

function detectIsland(arr, i, j) {
    let island = 0;
    if( ( i < 0 ) || i >= arr.length ) {
        return false
    }
    if( ( j < 0 ) || j >= arr[0].length ) {
        return false
    }

    island = arr[i][j];

    arr[i][j] = 0;

    if(island) {
        detectIsland(arr, i, j + 1);
        detectIsland(arr, i, j - 1);
        detectIsland(arr, i + 1, j);
        detectIsland(arr, i - 1, j);
    }

    return island
}

for(let i = 0; i < cloneMatrix.length; i++) {
    for(let j = 0; j < cloneMatrix[i].length; j++) {
        if(detectIsland(cloneMatrix, i, j)) {
            islandCnt++;
        }
    }
}

matrix.map(arr => console.info(...arr));
console.log('col-' + matrix[0].length);
console.log('row-' + matrix.length);
console.log('Island Count = ' + islandCnt);