function filterCart(arr, category) {
 return arr.filter(str => str.category.includes(category));
}

module.exports = { filterCart };
