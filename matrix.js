module.exports = class Matrix {

    constructor(height, width, matrix) {
        this.height = height;
        this.width = width;
        this.matrix = matrix;
    }



    static addition(m1, m2) {

        if (!(m1 instanceof Matrix) || !(m2 instanceof Matrix)) {
            throw new Error("Macierze musza byc obiektami typu Matrix")
        }

        if (m1.width !== m2.width || m1.height !== m2.height) {
            throw new Error("Macierze musza byc tych samych wymiarow")
        }

        const [cols, rows] = [m1.width, m1.height]

        var result = new Matrix(rows, cols, [])

        for (let i = 0; i < rows; i++)
        {
            result.matrix[i] = []
            for (let j = 0; j < cols; j++)
            {
                result.matrix[i].push(m1.matrix[i][j] + m2.matrix[i][j]);
                
            }
            
        }
        return result;
    }

    static subtraction(m1, m2) {

        if (!(m1 instanceof Matrix) || !(m2 instanceof Matrix)) {
            throw new Error("Macierze musza byc obiektami typu Matrix")
        }

        if (m1.width !== m2.width || m1.height !== m2.height) {
            throw new Error("Macierze musza byc tych samych wymiarow")
        }

        const [cols, rows] = [m1.width, m1.height]

        var result = new Matrix(rows, cols, [])

        for (let i = 0; i < rows; i++)
        {
            result.matrix[i] = [];
            for (let j = 0; j < cols; j++)
            {
                result.matrix[i].push(m1.matrix[i][j] - m2.matrix[i][j]);
                
            }
            
        }
        return result;
    }

    static multiplication(m1, m2) {

        if (!(m1 instanceof Matrix) || !(m2 instanceof Matrix)) {
            throw new Error("Macierze musza byc obiektami typu Matrix")
        }

        if (m1.width !== m2.height) {
            throw new Error("Liczba kolumn pierwszej macierzy musi być równa liczbie wierszy drugiej macierzy")
        }

        const [cols, rows, colsFirstRowsSecond] = [m2.width, m1.height, m1.width ]

        var result = new Matrix(m1.height, m2.width, [])

        for (let i = 0; i < rows; i++)
        {
            result.matrix[i] = [];
            for (let j = 0; j < cols; j++)
            {
                for (let k = 0; k < colsFirstRowsSecond; k++)
                {
                    if (result.matrix[i][j] === undefined) 
                        result.matrix[i].push(m1.matrix[i][k] * m2.matrix[k][j])
                    else
                        result.matrix[i][j] += m1.matrix[i][k] * m2.matrix[k][j];
                }
            }
        }

        return result;

    }

}