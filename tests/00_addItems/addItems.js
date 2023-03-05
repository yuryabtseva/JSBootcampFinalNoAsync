function addItems(cart, itemsToAdd) {
    // for (let i = 0; i < itemsToAdd.length; i++) {
    //     cart.push({ item: itemsToAdd[i].item, price: itemsToAdd[i].price, category: itemsToAdd[i].category });
    // }
    // return cart;
    // nice job solving!!if you are going to use a for loop, you don't have to add each key and value individually. You can add like this below.
      for (let i = 0; i < itemsToAdd.length; i++) {
      cart.push(itemsToAdd[i])
    }
    return cart

    // but, checkout spread syntax also for probably the simplest way to solve this. 
    // //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // return [...cart, ...itemsToAdd]
}

module.exports = { addItems };
