import React, { useEffect } from 'react';
import { fetchCovidData } from '../API/api';
import { useState } from 'react';

export default function Covid() {
  const [covidData, setCovidData] = useState([]);
  useEffect(() => {
    fetchCovidData().then((data) =>
      setCovidData(data.sort((a, b) => b.case - a.case))
    );
  }, []);
  return (
    <section className='m-5'>
      <h3 className='orange'>US COVID DATA</h3>
      <table className='table table-striped table-dark'>
        <thead>
          <tr className='wheat'>
            <th scope='col'>State</th>
            <th scope='col'>Cases</th>
            <th scope='col'>Deaths</th>
            <th scope='col'>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {covidData &&
            covidData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.state}</td>
                <td>{item.case}</td>
                <td>{item.death}</td>
                <td>{item.updated}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
