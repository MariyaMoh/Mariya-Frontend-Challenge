//jest framwork for testing 
//const { test, expect } = require('@jest/globals')
const getISS =require('./index.html')
test(' bring data fro api ' , () => {
    expect(getISS(abcd)).toBe(abcd)
})