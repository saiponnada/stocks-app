import { handleResponse, handleError } from './apiUtils';

const API_KEY = 'bquuff7rh5rcepltrbv0';
const apiRoot = 'https://finnhub.io/api/v1/';

function fetchAPIData(query, symbol, params = '') {
  let url = `${
    apiRoot + query
  }?symbol=${symbol.toUpperCase()}${params}&token=${API_KEY}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function fetchCovidData() {
  let url = `${apiRoot}covid19/us?token=${API_KEY}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getCompanyProfile(symbol) {
  return fetchAPIData(`stock/profile2`, symbol);
}

export function getCompanyQuote(symbol) {
  return fetchAPIData(`quote`, symbol);
}
export function getCompanyNews(symbol) {
  let date = new Date();
  const to = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  date.setDate(date.getDate() - 1);
  const from = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return fetchAPIData(`company-news`, symbol, `&from=${from}&to=${to}`);
}
