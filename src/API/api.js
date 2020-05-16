import { handleResponse, handleError } from './apiUtils';

const apiRoot = 'https://finnhub.io/api/v1/';
function fetchAPIData(query, symbol) {
  const API_KEY = 'bquuff7rh5rcepltrbv0';
  let url = `${
    apiRoot + query
  }?symbol=${symbol.toUpperCase()}&token=${API_KEY}`;
  //console.log(url);
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getCompanyProfile(symbol) {
  return fetchAPIData(`stock/profile2`, symbol);
}

export function getCompanyQuote(symbol) {
  return fetchAPIData(`quote`, symbol);
}
