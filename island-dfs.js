let matrix = [ 
    [0,0,1,0],
    [1,0,1,1],
    [0,0,0,1],
    [1,0,0,0],
    [0,1,0,0]
];

let cloneMatrix = JSON.parse(JSON.stringify(matrix));
let islandCnt = 0;

let maxRow = matrix.length;
let maxCol = matrix[0].length;

function dfs(arr, row, col, visitedArray) {
    const rowPattern = [-1, 0, 0, 1];
    const colPattern = [0,-1, 1, 0];

    visitedArray[row][col] = true;

    for(let k = 0; k < 4; k++) {
        if(isSafe(arr, row + rowPattern[k], col + colPattern[k], visitedArray)) {
            dfs(arr, row + rowPattern[k], col + colPattern[k], visitedArray);
        }
    }
}

function isSafe(arr, row, col, visitedArray) {
    return (row >= 0) && (row < maxRow) && (col >= 0) && (col < maxCol) && (arr[row][col] && !visitedArray[row][col]);
}

function createVisitedArray(rowLength, colLength) {
    let visited = new Array(maxRow);

    for(let i = 0; i < maxRow; i++) {
        visited[i] = new Array(maxCol);
    }

    for(let i = 0; i < maxRow; i++) {
        for(let j = 0; j < maxCol; j++) {
            visited[i][j] = false;
        }
    }

    return visited;
}

function countIslands(arr) {
    let visited = createVisitedArray(maxRow, maxCol)
    let cnt = 0;

    // visited.map(arr => console.info(...arr));

    for(let i = 0; i < maxRow; i++) {
        for(let j = 0; j < maxCol; j++) {
            if(arr[i][j] && !visited[i][j]) {
                dfs(arr, i, j, visited);
                cnt++;
            }
        }
    }

    return cnt;

}

matrix.map(arr => console.info(...arr));
console.log('col-' + matrix[0].length);
console.log('row-' + matrix.length);
console.log('Island Count = ' + countIslands(cloneMatrix));