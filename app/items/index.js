const items = {
    caramel: 2.50,
    hazelnut: 3.10,
    organicRaw: 2.00
};


exports.getItems = () => {
    return items;
};

exports.compareItems = (choice, payment) => {
    return items[choice] === payment;
};

exports.getAllowedItems = (totalPayment) => {
    let allowedItems = {};
    console.log(totalPayment);
    for (const key in items) {
        if (items[key] <= totalPayment) {
            allowedItems[key] = items[key];
        }
    }
    return allowedItems;
};