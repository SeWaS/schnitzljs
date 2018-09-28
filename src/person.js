import {
    randomInt,
    randomElementInArray
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

export const randomAge = (ageGroup = 'child') => {

    const ageGroupDef = new Map([
        ['child', {minAge: 1, maxAge: 9}],
        ['teenager', {minAge: 10, maxAge: 17}],
        ['adult', {minAge: 18, maxAge: 59}],
        ['senior', {minAge: 60, maxAge: 120}]
    ]);

    return randomInt(ageGroupDef.get(ageGroup).minAge, ageGroupDef.get(ageGroup).maxAge);
};
