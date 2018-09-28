import chai from 'chai';
import _ from 'lodash';
import { Person } from '../lib/schnitzlJS';


chai.expect();
const expect = chai.expect;

describe('SchnitzlJS Person...', () => {

    describe('can generate names', () => {

        it('should generate a prename', () => {
            expect(Person.prename()).not.to.be.empty
        })

        it('should generate a surname', () => {
            expect(Person.surname()).not.to.be.empty
        })

    })

    describe('can generate an age...', () => {

        it('for a child', () => {
            _.times(100, () => {
                expect(Person.randomAge()).to.be.above(0).and.below(10)
            })
        })

        it('for a teenager', () => {
            _.times(100, () => {
                expect(Person.randomAge('teenager')).to.be.above(9).and.below(18)
            })
        })

        it('for an adult', () => {
            _.times(100, () => {
                expect(Person.randomAge('adult')).to.be.above(17).and.below(60)
            })
        })

        it('for a senior', () => {
            _.times(100, () => {
                expect(Person.randomAge('senior')).to.be.above(50).and.below(121)
            })
        })

        it('throws an error if no valid age group is given', () => {
            expect(() => Person.randomAge('invalid')).to.throw(TypeError)
        })

    })

})