new Vue({
    el: '.matrix',
    data: {
        testText: 'Работает',
        matrix: [ 
            [0,0,1,0],
            [1,0,1,1],
            [0,0,0,1],
            [1,0,0,0],
            [0,1,0,0]
        ],
        cloneMatrix: [],
        islandCnt: 0,
        colorMatrix: []
    },
    methods: {
        createMatrixes() {
            for(let i = 0; i < this.matrix.length; i++) {
                // for(let j = 0; j < this.matrix[i].length; j++) {
                    this.colorMatrix.push([]);
                    this.cloneMatrix.push([]);
                // }
            }
    
            for(let i = 0; i < this.matrix.length; i++) {
                for(let j = 0; j < this.matrix[i].length; j++) {
                    this.colorMatrix[i].push('0');
                    this.cloneMatrix[i].push(this.matrix[i][j]);
                }
            }
        },
        detectIsland(arr, i, j, cntIndex) {
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
                this.detectIsland(arr, i, j + 1, cntIndex);
                this.detectIsland(arr, i, j - 1, cntIndex);
                this.detectIsland(arr, i + 1, j, cntIndex);
                this.detectIsland(arr, i - 1, j, cntIndex);
                this.colorMatrix[i][j] = cntIndex;
            }
    
            return island
        }
    },
    mounted() {
        this.createMatrixes();

        for(let i = 0; i < this.cloneMatrix.length; i++) {
            for(let j = 0; j < this.cloneMatrix[i].length; j++) {
                if(this.detectIsland(this.cloneMatrix, i, j, this.islandCnt+1)) {
                    this.islandCnt++;
                }
            }
        }
    }
});