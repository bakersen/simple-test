const chai = require('chai');
const { assert } = require('chai');
const add = require('../add')


describe('Test addition', ()=> {
    it('Return sum as 2', ()=>{
        assert.equal(add(2,2), 4)
    })
})