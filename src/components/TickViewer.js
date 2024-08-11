import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment-timezone';
import { fetchTrades } from '../store/tradesSlice';
import { fetchQuotes } from '../store/quotesSlice';
import TradesTable from './TradesTable';
import QuotesTable from './QuotesTable';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TickViewer = () => {
  const dispatch = useDispatch();
  const [dataType, setDataType] = useState('trades');
  const [ticker, setTicker] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'ticker') setTicker(value);
    if (name === 'date') setDate(value);
    if (name === 'time') setTime(value);
  };

  const handleFetch = () => {
    if (ticker && date) {
      const payload = { ticker, date, time };
      if (dataType === 'trades') {
        dispatch(fetchTrades(payload));
      } else {
        dispatch(fetchQuotes(payload));
      }
    } else {
      alert('Please fill in ticker and date');
    }
  };

  const getApiUrl = () => {
    if (!ticker || !date) return '';
    const apiKey = process.env.REACT_APP_POLYGON_API_KEY;
    let timestamp = moment.tz(`${date} ${time || '00:00'}`, 'YYYY-MM-DD HH:mm', 'America/New_York').valueOf() * 1000000;
    const baseUrl = `https://api.polygon.io/v3/${dataType}/${ticker}`;
    const params = new URLSearchParams({
      'timestamp.gte': timestamp.toString(),
      limit: '40',
      apiKey: apiKey,
      order: 'asc'
    });
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div>
      <div className="mb-4 flex items-center flex-wrap">
      <select
  value={dataType}
  onChange={(e) => setDataType(e.target.value)}
  className="mr-2 p-2 border rounded mb-2 bg-white text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#5F5CFF] focus:border-transparent"
>
  <option value="trades">Trades</option>
  <option value="quotes">Quotes</option>
</select>
        <input
          type="text"
          name="ticker"
          placeholder="Ticker"
          value={ticker}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded mb-2"
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded mb-2"
        />
        <input
          type="time"
          name="time"
          value={time}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded mb-2"
        />
        <button
          onClick={handleFetch}
          className="rounded bg-[#5F5CFF] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4A47FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5F5CFF] mr-2 mb-2"
        >
          Fetch {dataType.charAt(0).toUpperCase() + dataType.slice(1)}
        </button>
        <CopyToClipboard text={getApiUrl()}>
          <button className="rounded bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 mb-2">
            Copy API URL
          </button>
        </CopyToClipboard>
      </div>

      {dataType === 'trades' 
        ? <TradesTable ticker={ticker} date={date} time={time} /> 
        : <QuotesTable ticker={ticker} date={date} time={time} />
      }
    </div>
  );
};

export default TickViewer;