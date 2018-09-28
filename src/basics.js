// generating numbers

export const randomInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomDigit = () => randomInt(0, 9);

// generating strings

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZäöüÄÖÜß';

export const randomChar = () => {
    const randomNum = randomInt(0, alphabet.length - 1);
    return alphabet.charAt(randomNum);
};

export const randomString = (length = 7) => {
    let randomStr = '123';
    while (randomStr.length < length) {
        randomStr += randomChar();
    }
    return randomStr;
};

export const randomBoolean = () => randomInt(1, 9) % 2 === 0;

// Arrays

export const randomElementInArray = (array) => {
    if (!array.length > 0) throw new RangeError('We can\'t choose a random value from an empty array, my friend!');
    return array[randomInt(0, array.length - 1)];
};

export const randomPickFromArray = (num, array) => {
    if (num < 1) throw new RangeError('We can\'t choose a random subset of values of size 0 from an array, my friend!');
    return [...Array(num)].map(x => randomElementInArray(array));
};
