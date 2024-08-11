import React, { useEffect } from 'react';
import moment from 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrades, clearTrades } from '../../store/tradesSlice';

const TradesTable = ({ ticker, date, time }) => {
  const dispatch = useDispatch();
  const { items: trades, status, error, nextUrl } = useSelector(state => state.trades);

  useEffect(() => {
    return () => {
      dispatch(clearTrades());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    if (nextUrl) {
      dispatch(fetchTrades({ nextUrl }));
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

      {trades && trades.length > 0 && (
        <>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Timestamp (Unix)</th>
                <th className="border p-2">Time (ET)</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Size</th>
                <th className="border p-2">Exchange</th>
                <th className="border p-2">Conditions</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{trade.sip_timestamp || 'N/A'}</td>
                  <td className="border p-2">{trade.sip_timestamp ? formatTimestamp(trade.sip_timestamp) : 'N/A'}</td>
                  <td className="border p-2">{trade.price ? `$${parseFloat(trade.price).toFixed(2)}` : 'N/A'}</td>
                  <td className="border p-2">{trade.size || 'N/A'}</td>
                  <td className="border p-2">{trade.exchange || 'N/A'}</td>
                  <td className="border p-2">{trade.conditions ? trade.conditions.join(', ') : 'N/A'}</td>
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

export default TradesTable;