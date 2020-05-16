import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../API/api';
import CompanyProfile from './CompanyProfile';

export default function CompanyContainer() {
  const { ticker } = useParams();
  const [companyProfile, setCompanyProfile] = useState({});
  const [companyQuote, setCompanyQuote] = useState({});

  useEffect(() => {
    if (ticker) {
      API.getCompanyProfile(ticker).then((data) => setCompanyProfile(data));
      API.getCompanyQuote(ticker).then((data) => setCompanyQuote(data));
    }
  }, [ticker]);

  return (
    <React.Fragment>
      {Object.keys(companyProfile).length !== 0 && (
        <CompanyProfile data={companyProfile} quote={companyQuote} />
      )}
    </React.Fragment>
  );
}
