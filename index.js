const paginateArray = (dataEntries, settings) => {
    if( !Array.isArray(dataEntries) ) {
        throw 'DataEntries must be an array';
    } if (Object.keys(settings)[0] !== "actualPageIdx" || Object.keys(settings)[1] !== "entriesOnPage" || Object.keys(settings).length !== 2) {
      throw 'Settings must be an object and have only 2 keys - actualPageIdx and entriesOnPage'
    } if (!Number.isInteger(settings.actualPageIdx) || settings.actualPageIdx <= 0) {
      throw 'Settings.actualPageIdx must be natural number'
    } if (!Number.isInteger(settings.entriesOnPage) || settings.entriesOnPage <= 0) {
      throw 'Settings.entriesOnPage must be natural number'
    }
    actualPage = settings.actualPageIdx;
    entriesOnPage = settings.entriesOnPage;
    const offset = (actualPage - 1) * entriesOnPage;
    const entriesOnSelectedPage = dataEntries.slice(offset, offset + entriesOnPage);
    return entriesOnSelectedPage
}

const dataEntries = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4];
const settings = {
  actualPageIdx : 2, 
  entriesOnPage: 10
};

// console.log(paginateArray(dataEntries, settings));

module.exports = {
    paginateArray : paginateArray
}