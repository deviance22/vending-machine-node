const allowedCurrency = ['$', 'c', 'dollar', 'cents', 'us dollar'];

exports.getTotal = (dollar, cents) => {
    const dollarTotal = dollar.one + (dollar.two * 2);
    const centsTotal = (cents.ten * .10) + (cents.twenty * .20) + (cents.fifty * .50);
    return dollarTotal + centsTotal;
};

exports.checkCurrency = (currency) => {
    return allowedCurrency.includes(currency.toLowerCase());
};
