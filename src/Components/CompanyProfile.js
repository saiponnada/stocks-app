import React from 'react';

export default function CompanyProfile({ data, quote }) {
  return (
    <section className='text-left m-1 p-2'>
      <small>{data.ticker}</small>
      <div>
        <a className='h3' href={data.weburl}>
          {data.name}
        </a>
        {quote && (
          <span className={`p-1 ` + (quote.c > quote.o ? 'green' : 'red')}>
            {quote.c}
          </span>
        )}
      </div>
      <span className='d-block'>Country : {data.country}</span>
      <span className='d-block'>Industry : {data.finnhubIndustry}</span>
      <span className='d-block'>
        Market Cap :
        {data.marketCapitalization > 10 ** 6
          ? (data.marketCapitalization / 10 ** 6).toFixed(2) + ` T`
          : data.marketCapitalization > 10 ** 3
          ? (data.marketCapitalization / 10 ** 3).toFixed(2) + ` B`
          : data.marketCapitalization + ` M`}
      </span>
    </section>
  );
}
