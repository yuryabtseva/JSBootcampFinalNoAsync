function removeVowels(arr) {
    // great job using regex. Can also solve like this with a one liner using split, filter, and join
    const vowels = 'AEIOUaeiou';
    return arr.split('').filter(letter => !vowels.includes(letter)).join('')
    // return arr.replace(/[aeiou]/ig,'')
}

module.exports = { removeVowels };
