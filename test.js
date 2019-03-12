var assert = require('assert');

var Matrix = require("./matrix.js");

describe('Constructor test', function () {
    var m1 = new Matrix(2, 2, [[1,2], [3,4]]);

    var m2 = new Matrix(0, 0);
 it('should return correct matrix height', function () {
        assert.equal(m1.height, 2);
    });
 it('should return correct matrix width', function () {
        assert.equal(m1.width, 2);
    });

    it('should return correct empty matrix height', function () {
        assert.equal(m2.height, 0);
    });
 it('should return correct empty matrix width', function () {
        assert.equal(m2.width, 0);
    });
});

describe('Addition test', function () {
    var m1 = new Matrix(2, 2, [[1,2], [3,4]]);

    var m2 = new Matrix(2, 2, [[5,6], [7,8]]);

    var result = new Matrix(2,2, [[6,8], [10, 12]])
 it('should return correct addition result height', function () {
        assert.equal(Matrix.addition(m1, m2).height, result.height);
    });
 it('should return  correct addition result width', function () {
        assert.equal(Matrix.addition(m1, m2).width, result.height);
    });

    it('should return correct addition result', function () {
        assert.deepEqual(Matrix.addition(m1, m2).matrix, result.matrix);
    });

});

describe('subtraction test', function () {
    var m1 = new Matrix(2, 2, [[1,2], [3,4]]);

    var m2 = new Matrix(2, 2, [[5,6], [7,8]]);

    var result = new Matrix(2,2, [[-4, -4], [-4, -4]])
 it('should return correct subtraction result height', function () {
        assert.equal(Matrix.subtraction(m1, m2).height, result.height);
    });
 it('should return  correct subtraction result width', function () {
        assert.equal(Matrix.subtraction(m1, m2).width, result.height);
    });

    it('should return correct subtraction result', function () {
        assert.deepEqual(Matrix.subtraction(m1, m2).matrix, result.matrix);
    });

});

describe('subtraction test', function () {
    var m1 = new Matrix(2, 2, [[1,2], [3,4]]);

    var m2 = new Matrix(2, 2, [[5,6], [7,8]]);

    var result = new Matrix(2,2, [[19, 22], [43, 50]])
 it('should return correct subtraction result height', function () {
        assert.equal(Matrix.multiplication(m1, m2).height, result.height);
    });
 it('should return  correct subtraction result width', function () {
        assert.equal(Matrix.multiplication(m1, m2).width, result.height);
    });

    it('should return correct subtraction result', function () {
        assert.deepEqual(Matrix.multiplication(m1, m2).matrix, result.matrix);
    });

});