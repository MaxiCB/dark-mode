import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  // Coin data from base problem
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true
  const [coinData, setCoinData] = useState([]);
  // All available currencies from API
  // https://api.coingecko.com/api/v3/coins/list
  const [available, setAvailable] = useState([]);
  // Current selected currency
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=africa-chain&order=market_cap_desc&per_page=100&page=1&sparkline=true
  const [current, setCurrent] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/list')
        .then(res => setAvailable(res.data))
          axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + current + '&order=market_cap_desc&per_page=100&page=1&sparkline=true')
              .then(res => setCoinData(res.data))
              .catch(err => console.log(err))
        .catch(err => console.log(err))
  }, [current]);
  return (
    <div className="App">
      <Navbar current={current} available={available} setCurrent={setCurrent}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
