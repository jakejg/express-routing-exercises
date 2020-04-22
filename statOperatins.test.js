const ExpressError = require('./errors')
const { getMean, getMedian, getMode } = require('./statOperations')


describe("Mean tests", () =>{
    
    test('Should get the average of numbers in an array', () => {
        expect(getMean([10,20,30,40])).toEqual(25)
    });

    test("Should return zero", () => {
        expect(getMean([0])).toEqual(0)
    })

    test("Should work with negative numbers", () => {
        expect(getMean([-10,-5, 8, 25])).toEqual(4.5)
    })
})

describe("Median tests", () =>{
    
    test('Should get the middle value in an array', () => {
        expect(getMedian([40,20,30,10,50])).toEqual(30)
    });

    test("Should get the mean of the middle two numbers", () => {
        expect(getMedian([10,20,30,40])).toEqual(25)
    })

    test("Should work with negative numbers", () => {
        expect(getMedian([-10,-5, 8, 25,-40])).toEqual(-5)
    })
})

describe("Mode tests", () =>{
    
    test('Should get the most frequent value', () => {
        expect(getMode([40,20,30,10,50,10])).toEqual(10)
    });

    test("Should return an array of the most frequent values", () => {
        expect(getMode([10,20,30,40,10,30])).toEqual([10,30])
    })

    test("Should return No mode if no number appears more than once", () => {
        expect(getMode([-10,-5, 8, 25,-40])).toEqual("No mode")
    })
})