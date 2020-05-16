import React from 'react';

export default function CompanyNews({ news }) {
  return (
    <section className='newsContainer pt-4'>
      <h4 className='orange'>News</h4>
      {news.length > 0 &&
        news.map((item) => (
          <div
            key={item.id}
            className='newsItem py-3 row border-bottom border-secondary'
          >
            <div className='col-3 col-lg-1'>
              <img
                className='img-fluid'
                height={200}
                width={300}
                src={item.image}
                alt={item.headline}
              ></img>
            </div>
            <div className='col-9 col-lg-11'>
              <h6>
                <a href={item.url}>{item.headline}</a>
              </h6>
              <span>{item.summary}</span>
              <small className='d-block pt-2'>
                Related Tags:{' '}
                {item.related.split(',').map((item, idx) => (
                  <a key={idx} href={item} className='p-1'>
                    {item}
                  </a>
                ))}
              </small>
            </div>
          </div>
        ))}
    </section>
  );
}
