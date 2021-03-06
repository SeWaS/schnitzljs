import {
    randomInt,
    randomElementInArray,
    randomString,
    randomChar,
    randomUniqueString
} from './basics';

export const prename = () => {
    const commons = [
        'Finn', 'Jan', 'Jannik', 'Jonas', 'Leon', 'Luca', 'Lukas', 'Niklas', 'Tim', 'Tom',
        'Anna', 'Hannah', 'Julia', 'Lara', 'Laura', 'Lea', 'Lena', 'Lisa', 'Michelle', 'Sarah'
    ];
    return randomElementInArray(commons);
};

export const surname = () => {
    const commons = [
        'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
        'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'
    ];
    return randomElementInArray(commons);
};

const ageGroupDef = new Map([
    ['child', {minAge: 1, maxAge: 9}],
    ['teenager', {minAge: 10, maxAge: 17}],
    ['adult', {minAge: 18, maxAge: 59}],
    ['senior', {minAge: 60, maxAge: 120}]
]);

export const randomAge = (ageGroup = 'child') => {
    return randomInt(ageGroupDef.get(ageGroup).minAge, ageGroupDef.get(ageGroup).maxAge);
};

export const randomBirthday = ({ asString = false, ageGroup = 'child' } = {}) => {
    const now = new Date();
    const randomDate = new Date(
        now.getFullYear() - randomInt(ageGroupDef.get(ageGroup).minAge, ageGroupDef.get(ageGroup).maxAge),
        now.getMonth(),
        now.getDay()
    );

    if (asString) {
        const month = randomDate.getMonth() < 10 ? '0' + randomDate.getMonth() : randomDate.getMonth();
        const day = randomDate.getDay() < 10 ? '0' + randomDate.getDay() : randomDate.getDay();
        return month + '/' + day + '/' + randomDate.getFullYear();
    };

    return randomDate;
};

export const randomGender = (additionalGenders = []) => {
    const genders = additionalGenders.concat(['female', 'male']);
    return randomElementInArray(genders);
};

export const randomNamePrefix = (country = 'england') => {
    let prefixes;
    switch (country) {
        case 'england':
            prefixes = ['Mr', 'Mrs', 'Ms', 'Miss'];
            break;
        case 'germany':
            prefixes = ['Herr', 'Frau'];
            break;
        default:
            throw new RangeError('No prefixes for this country yet, my friend!');
    }

    return randomElementInArray(prefixes);
};

export const randomEmail = (tld) => {
    let topLevelDomain = tld ? tld : randomString({ length: randomInt(2, 3), pool: 'abcdefghijklmnopqrstuvwxyz' });

    return randomChar('abcdefghijklmnopqrstuvwxyz0123456789') +
    randomString({ length: 10, pool: 'abcdefghijklmnopqrstuvwxyz0123456789.-_'}) +
    randomString({ length: 1, pool: 'abcdefghijklmnopqrstuvwxyz'}) +
    '@' +
    randomChar('abcdefghijklmnopqrstuvwxyz0123456789') +
    randomUniqueString({ length: 10, pool: 'abcdefghijklmnopqrstuvwxyz0123456789.-' }) +
    randomChar('abcdefghijklmnopqrstuvwxyz') +
    '.' +
    topLevelDomain;
};
