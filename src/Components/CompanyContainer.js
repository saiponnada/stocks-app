import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../API/api';
import CompanyProfile from './CompanyProfile';
import CompanyNews from './CompanyNews';

export default function CompanyContainer() {
  const { ticker } = useParams();
  const [companyProfile, setCompanyProfile] = useState({});
  const [companyQuote, setCompanyQuote] = useState({});
  const [companyNews, setCompanyNews] = useState([]);

  useEffect(() => {
    if (ticker) {
      API.getCompanyProfile(ticker).then((data) => setCompanyProfile(data));
      API.getCompanyQuote(ticker).then((data) => setCompanyQuote(data));
      API.getCompanyNews(ticker).then((data) => setCompanyNews(data));
    }
  }, [ticker]);
  return (
    <React.Fragment>
      {Object.keys(companyProfile).length !== 0 && (
        <section className='m-3 p-2'>
          <CompanyProfile data={companyProfile} quote={companyQuote} />
          <CompanyNews news={companyNews} />
        </section>
      )}
    </React.Fragment>
  );
}
