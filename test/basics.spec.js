import chai from 'chai';
import _ from 'lodash';
import { BasicRandoms } from '../lib/schnitzlJS';


chai.expect();
const expect = chai.expect;

describe('SchnitzlJS Basics...', () => {

    describe('should generate a random number...', () => {

        it ('with no constraints', () => {
            _.times(100, () => {
                expect(BasicRandoms.randomInt() % 1).to.be.equal(0)
            })
        })
    
        it ('with given min', () => {
            _.times(100, () => {
                const randomVal = BasicRandoms.randomInt(90)
                expect(randomVal % 1).to.be.equal(0)
                expect(randomVal).to.be.above(89).and.below(101)
            })
        })
    
        it ('with given range', () => {
            _.times(100, () => {
                const randomVal = BasicRandoms.randomInt(14, 705)
                expect(randomVal % 1).to.be.equal(0)
                expect(randomVal).to.be.above(13).and.below(706)
            })
        })

        it ('should generate a random digit', () => {
            _.times(100, () => {
                const randomVal = BasicRandoms.randomDigit()
                expect(randomVal % 1).to.be.equal(0)
                expect(randomVal).to.be.above(-1).and.below(11)
            })
        })
    })

    describe('should generate a random string...', () => {

        it('only a char', () => {
            _.times(100, () => {
                expect(BasicRandoms.randomChar()).to.match(/[a-zA-ZäüöÄÜÖß]/g)
            })
        })

        it('with default length', () => {
            _.times(100, () => {
                expect(BasicRandoms.randomString()).to.have.lengthOf(7)
            })
        })

        it('with given length', () => {
            _.times(100, () => {
                expect(BasicRandoms.randomString(14)).to.have.lengthOf(14)
            })
        })

    })

    it('should generate a random boolean', () => {
        expect(BasicRandoms.randomBoolean()).to.be.a('boolean')
    })

    describe('should generate out of a given array...', () => {

        it('a random element', () => {
            const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            expect(testArray).to.include(BasicRandoms.randomElementInArray(testArray))
        })
    
        it('throw an error if schnitzlJS should pick from an empty array', () => {
            expect(() => BasicRandoms.randomElementInArray([/* empty */])).to.throw(RangeError)
        })
    
        it('a random subset with given length', () => {
            const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            const pick = 2
            const result = BasicRandoms.randomPickFromArray(pick, testArray)
            expect(result).to.have.lengthOf(pick)
            expect(testArray).to.include.members(result)
        })
    
        it('throw an error if schnitzlJS should pick a subset from an empty array', () => {
            expect(() => BasicRandoms.randomPickFromArray(2 ,[/* empty */])).to.throw(RangeError)
        })
    
        it('throw an error if schnitzlJS should pick a subset of less than 1 from an array', () => {
            const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            expect(() => BasicRandoms.randomPickFromArray(0 ,testArray)).to.throw(RangeError)
        })

    })

})