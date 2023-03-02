/* eslint-disable no-param-reassign */
function mostVowels(str) {
    const arr = str.split(" ");
    let count = 0;
    let finalWord = "";
    for (let i = 0; i < arr.length; i++) {
        const vowelCount = arr[i].match(/[aeiou]/gi).length;
        if (vowelCount > count){
            finalWord = arr[i];
            count = vowelCount;
        } 
    }
    return finalWord.toLowerCase();

}

module.exports = { mostVowels };
