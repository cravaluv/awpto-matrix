var Matrix = require("./matrix.js");

var m1 = new Matrix(2, 2, [[1,2], [3,4]]);
var m2 = new Matrix(2, 2, [[5,6],[7,8]]);

var res = Matrix.subtraction(m1, m2)