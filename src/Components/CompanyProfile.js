import React from 'react';

export default function CompanyProfile({ data, quote, peers }) {
  return (
    <section className='text-left'>
      <small>
        {data.ticker} | {data.country} | {data.exchange}
      </small>
      <div className='row mt-2'>
        <div className='col-3 col-lg-1'>
          <img
            className='img-fluid'
            height={200}
            width={300}
            src={data.logo}
            alt={data.name}
          ></img>
        </div>
        <div className='col-9 col-lg-11'>
          <a className='h2 d-block' href={data.weburl}>
            {data.name}
          </a>
          {quote && (
            <span>
              <span className={`h4 ` + (quote.c > quote.pc ? 'green' : 'red')}>
                {quote.c + ' '}
              </span>
              {data.currency}
            </span>
          )}
          <div>Industry : {data.finnhubIndustry}</div>
          <div>
            Market Cap :
            {data.marketCapitalization > 10 ** 6
              ? (data.marketCapitalization / 10 ** 6).toFixed(2) + ` T`
              : data.marketCapitalization > 10 ** 3
              ? (data.marketCapitalization / 10 ** 3).toFixed(2) + ` B`
              : data.marketCapitalization + ` M`}
          </div>
        </div>
      </div>
      <small className='d-block pt-2'>
        Peers :{' '}
        {peers.map((item, idx) => (
          <a key={idx} href={item} className='p-1'>
            {item}
          </a>
        ))}
      </small>
    </section>
  );
}
