import React, { useEffect } from 'react';
import moment from 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes, clearQuotes } from '../../store/quotesSlice';

const QuotesTable = ({ ticker, date, time }) => {
  const dispatch = useDispatch();
  const { items: quotes, status, error, nextUrl } = useSelector(state => state.quotes);

  useEffect(() => {
    // Clear quotes when component unmounts
    return () => {
      dispatch(clearQuotes());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    if (nextUrl) {
      dispatch(fetchQuotes({ nextUrl }));
    }
  };

  const formatTimestamp = (timestamp) => {
    const milliseconds = Math.floor(timestamp / 1000000);
    return moment(milliseconds).tz('America/New_York').format('YYYY-MM-DD HH:mm:ss.SSS');
  };

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {quotes.length > 0 && (
        <>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Timestamp (Unix)</th>
                <th className="border p-2">Time (ET)</th>
                <th className="border p-2">Ask Price</th>
                <th className="border p-2">Ask Size</th>
                <th className="border p-2">Ask Exchange</th>
                <th className="border p-2">Bid Price</th>
                <th className="border p-2">Bid Size</th>
                <th className="border p-2">Bid Exchange</th>
                <th className="border p-2">Conditions</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{quote.sip_timestamp || 'N/A'}</td>
                  <td className="border p-2">{quote.sip_timestamp ? formatTimestamp(quote.sip_timestamp) : 'N/A'}</td>
                  <td className="border p-2">{quote.ask_price ? `$${parseFloat(quote.ask_price).toFixed(2)}` : 'N/A'}</td>
                  <td className="border p-2">{quote.ask_size || 'N/A'}</td>
                  <td className="border p-2">{quote.ask_exchange || 'N/A'}</td>
                  <td className="border p-2">{quote.bid_price ? `$${parseFloat(quote.bid_price).toFixed(2)}` : 'N/A'}</td>
                  <td className="border p-2">{quote.bid_size || 'N/A'}</td>
                  <td className="border p-2">{quote.bid_exchange || 'N/A'}</td>
                  <td className="border p-2">{quote.conditions ? quote.conditions.join(', ') : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-4 flex justify-center">
            {nextUrl && (
              <button
                onClick={handleLoadMore}
                className="rounded bg-[#5F5CFF] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4A47FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5F5CFF]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Loading...' : 'Load More'}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default QuotesTable;