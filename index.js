import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_fH39WkKsi18P0jL8JPkkfDmBwuKw3v9ojzumHeup');

export async function currenyConverter(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: 'USD',
        currencies: 'INR'
    });
    const multiPlier = res.data[toCurrency]
    return multiPlier*units;
}
