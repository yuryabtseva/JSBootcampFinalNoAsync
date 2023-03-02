function addItems(cart, itemsToAdd) {
    for (let i = 0; i < itemsToAdd.length; i++) {
        cart.push({ item: itemsToAdd[i].item, price: itemsToAdd[i].price, category: itemsToAdd[i].category });
    }
    return cart;
}

module.exports = { addItems };
