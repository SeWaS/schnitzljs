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

    describe('can generate a random birthday...', () => {

        const now = new Date()

        it('for a child', () => {
            const minChild = new Date(
                now.getFullYear() - 9,
                now.getMonth(),
                now.getDay()
            )

            const maxChild = new Date(
                now.getFullYear() - 1,
                now.getMonth(),
                now.getDay()
            )
            _.times(100, () => {
                expect(Person.randomBirthday()).to.be.at.least(minChild).and.at.most(maxChild)
            })
        })

        it('for a child as string', () => {
            _.times(100, () => {
                expect(Person.randomBirthday(true)).to.match(/[0-9]{2}\/[0-9]{2}\/[1-2][0-9]{3}/)
            })
        })

        it('for a teenager', () => {
            const minTeen = new Date(
                now.getFullYear() - 17,
                now.getMonth(),
                now.getDay()
            )

            const maxTeen = new Date(
                now.getFullYear() - 10,
                now.getMonth(),
                now.getDay()
            )
            _.times(100, () => {
                expect(Person.randomBirthday(false, 'teenager')).to.be.at.least(minTeen).and.at.most(maxTeen)
            })
        })

        it('for a teenager as string', () => {
            _.times(100, () => {
                expect(Person.randomBirthday(true, 'teenager')).to.match(/[0-9]{2}\/[0-9]{2}\/[1-2][0-9]{3}/)
            })
        })

        it('for an adult', () => {
            const minAdult = new Date(
                now.getFullYear() - 59,
                now.getMonth(),
                now.getDay()
            )

            const maxAdult = new Date(
                now.getFullYear() - 18,
                now.getMonth(),
                now.getDay()
            )
            _.times(100, () => {
                expect(Person.randomBirthday(false, 'adult')).to.be.at.least(minAdult).and.at.most(maxAdult)
            })
        })

        it('for an adult as string', () => {
            _.times(100, () => {
                expect(Person.randomBirthday(true, 'adult')).to.match(/[0-9]{2}\/[0-9]{2}\/[1-2][0-9]{3}/)
            })
        })

        it('for a senior', () => {
            const minSenior = new Date(
                now.getFullYear() - 120,
                now.getMonth(),
                now.getDay()
            )

            const maxSenior = new Date(
                now.getFullYear() - 60,
                now.getMonth(),
                now.getDay()
            )
            _.times(100, () => {
                expect(Person.randomBirthday(false, 'senior')).to.be.at.least(minSenior).and.at.most(maxSenior)
            })
        })

        it('for a senior as string', () => {
            _.times(100, () => {
                expect(Person.randomBirthday(true, 'senior')).to.match(/[0-9]{2}\/[0-9]{2}\/[1-2][0-9]{3}/)
            })
        })

    })

})