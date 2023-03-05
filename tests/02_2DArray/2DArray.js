function twoDArray(arr) {
  // great job!
    const flatArr = arr.flat(3);
    let total = 0;
    for (i = 0; i< flatArr.length; i++) {
      total += flatArr[i];
    }
    return total;
}

module.exports = { twoDArray };
