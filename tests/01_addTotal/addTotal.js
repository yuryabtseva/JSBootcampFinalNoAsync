// make sure to check readme for information about taxes
function addTotal(arr, state) {
    let tax = 0;
    if (state === "NY") {
        tax = 0.09;
    } else if (state === "NJ"){
        tax = 0.07;
    } else {
        tax = 0.12;
    }
    const sum = arr.reduce((accumulator, iterator) => {
          return accumulator + iterator.price;
        }, 0);
    const total = sum + (sum*tax) 
    return Number(total.toFixed(2));   
}

module.exports = { addTotal };
