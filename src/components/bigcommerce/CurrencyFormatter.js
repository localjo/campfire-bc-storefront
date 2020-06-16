const CurrencyFormatter = ({ currency, amount }) => {
  const languageCode = 'en-US';
  // Prices are returned by API in the store's currency which is USD (for now)
  // typeof window !== 'undefined'
  //   ? window.navigator.language || 'en-US'
  //   : 'en-US';
  const formattedPrice = new Intl.NumberFormat(languageCode, {
    style: 'currency',
    currency,
  }).format(amount);
  return amount && formattedPrice;
};

export default CurrencyFormatter;
