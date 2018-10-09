// generating numbers

export const randomInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomDigit = () => randomInt(0, 9);

// Arrays

export const randomElementInArray = (array) => {
    if (!array.length > 0) throw new RangeError('We can\'t choose a random value from an empty array, my friend!');
    return array[randomInt(0, array.length - 1)];
};

export const randomPickFromArray = (num, array) => {
    if (num < 1) throw new RangeError('We can\'t choose a random subset of values of size 0 from an array, my friend!');
    return [...Array(num)].map(x => randomElementInArray(array));
};

// generating strings

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZäöüÄÖÜß';

export const randomChar = (pool = alphabet) => {
    const randomNum = randomInt(0, pool.length - 1);
    return pool.charAt(randomNum);
};

export const randomString = ({length = 7, pool = alphabet} = {}) => {
    return [...Array(length)].reduce((acc, _) => acc + randomChar(pool), '');
};

export const randomUniqueString = ({length = 7, pool = alphabet} = {}) => {
    let editedPool = [...pool];
    return [...Array(length)].reduce((acc, _) => {
        let c = randomElementInArray(editedPool);
        editedPool = editedPool.filter(f => f !== c);
        return acc + c;
    }, '');
};

export const randomBoolean = () => randomInt(1, 9) % 2 === 0;
