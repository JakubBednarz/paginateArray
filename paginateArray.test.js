const {  paginateArray } = require("./index");

//Data for correct behavior

const dataEntries = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4];
const settings = {
  actualPageIdx : 2, 
  entriesOnPage: 10
};
const dataEntries1 = [];
const settings2 = {
    actualPageIdx : 5, 
    entriesOnPage: 2
}
for (let i=1; i<100; i++) {
    dataEntries1.push(i);
}
//Data for incorrect behavior (throws errors)

const invalidDataEntries = "1,1,1,1,1,1,1,1,2,2,2,2,2"
const invalidSettings1 = "String";
const invalidSettings2 = {
    actualPageIdx: "String",
    entriesOnPage: 10
};
const invalidSettings3 = {
    actualPageIdx: 2,
    entriesOnPage: -10
};
const invalidSettings4 = {
    invalidName: 2,
    entriesOnPage: 10
};
const invalidSettings5 = {
    invalidName: 2,
    entriesOnPage: 10,
    randomEntry: 69
};

// Tests

test('Is paginateArray correctly returning array of 10 twos', () => {
    expect(
        paginateArray(dataEntries,settings)
    ).toStrictEqual([2,2,2,2,2,2,2,2,2,2]);
});

test('Is paginateArray correctly returning array of two numbers from 5th page', () => {
    expect(
        paginateArray(dataEntries1,settings2)
    ).toStrictEqual([9,10]);
});

test('Is paginateArray throwing an error when dataEntries is a String', () => {
    expect(() => {
        paginateArray(invalidDataEntries,settings);
    }).toThrow('DataEntries must be an array');
});

test('Is paginateArray throwing an error when settings is a String', () => {
    expect(() => {
        paginateArray(dataEntries,invalidSettings1);
    }).toThrow('Settings must be an object and have only 2 keys - actualPageIdx and entriesOnPage');
});

test('Is paginateArray throwing an error when actualPageIdx is a String', () => {
    expect(() => {
        paginateArray(dataEntries,invalidSettings2);
    }).toThrow('Settings.actualPageIdx must be natural number');
});

test('Is paginateArray throwing an error when entriesOnPage is a negative number', () => {
    expect(() => {
        paginateArray(dataEntries,invalidSettings3);
    }).toThrow('Settings.entriesOnPage must be natural number');
});

test('Is paginateArray throwing an error when actualPageIdx has incorrect name(key name)', () => {
    expect(() => {
        paginateArray(dataEntries,invalidSettings4);
    }).toThrow('Settings must be an object and have only 2 keys - actualPageIdx and entriesOnPage');
});

test('Is paginateArray throwing an error when settings has more than 2 keys', () => {
    expect(() => {
        paginateArray(dataEntries,invalidSettings5);
    }).toThrow('Settings must be an object and have only 2 keys - actualPageIdx and entriesOnPage');
});