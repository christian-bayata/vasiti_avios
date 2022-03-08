import React, { Fragment, useState, useEffect } from 'react';
import Loader from './layout/Loader.js';
import '../App.css';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Fragment>
      <section className="card p-3">
        <img
          className="card-img-top"
          src="https://cdn.runrepeat.com/i/skechers/35033/skechers-sport-women-s-premiums-wide-sneaker-black-9-5-w-us-black-black-leather-938f-main.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Sketchers GO RUN 3</h5>
          <p className="card-text">A classic shoe to wear at all times </p>
          <h5 className="card-title">#15,000</h5>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
