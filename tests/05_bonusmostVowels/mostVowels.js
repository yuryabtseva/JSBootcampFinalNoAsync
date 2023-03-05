/* eslint-disable no-param-reassign */
// Nice!! I like this more than how I solved it just because it's easier to read. My mind doesn't usually go to regex.
// I'll leave my solution in case you want to take a look.

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

// function mostVowels(str) {
//     const arrOfWords = str.split(' ')
//     const wordMap = {}
//     const vowels = 'aeiouAEIOU'
//     for (let i = 0; i < arrOfWords.length; i ++) {
//         // loop through each word in the array
//         const word = arrOfWords[i]
//         for (let j = 0; j < word.length; j ++) {{
//             // loop through each letter in the word
//             const letter = word[j]
//             if (vowels.includes(letter)) {
//                 // if you find a vowel add the word to the wordMap
//                 // the wordMap is an object that stores the word as a key and the number of vowels as the value
//                 // this is usually known as a map. It's a popular way to solve problems like this.
//                 if (!wordMap[word]) {
//                     wordMap[word] = 1
//                 } else {
//                     // if the word is already in the map, then just increment the value that is storing the number of vowels.
//                     wordMap[word] ++
//                 }
//             }
//         }}
       
//     }
    
//     const keys = Object.keys(wordMap)
//     let mostVowels = keys[0]
//     for(let i  = 1;  i < keys.length; i ++) {
//         // loop through your map and find the word with with most vowels.
//         // set the currentWord to the mostVowels if it has more vowels the current mostVowels
//         const currentWord = keys[i]
//         if (wordMap[currentWord] > wordMap[mostVowels]) {
//             mostVowels = currentWord
//         }
//     }
//     // return the word with mostVowels
//     return mostVowels.toLowerCase()
// }

module.exports = { mostVowels };
