import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import moment from 'moment-timezone';

export const fetchTrades = createAsyncThunk(
  'trades/fetchTrades',
  async ({ ticker, date, time, nextUrl }, { rejectWithValue }) => {
    try {
      const apiKey = process.env.REACT_APP_POLYGON_API_KEY;
      if (!apiKey) {
        throw new Error('API key is not set');
      }

      let url;
      if (nextUrl) {
        url = `${nextUrl}&apiKey=${apiKey}`;
      } else {
        let timestamp;
        if (time) {
          const dateTime = moment.tz(`${date} ${time}`, 'YYYY-MM-DD HH:mm', 'America/New_York');
          timestamp = dateTime.valueOf() * 1e6;
        } else {
          timestamp = moment.tz(date, 'YYYY-MM-DD', 'America/New_York').startOf('day').valueOf() * 1e6;
        }

        const baseUrl = `https://api.polygon.io/v3/trades/${ticker}`;
        const params = new URLSearchParams({
          'timestamp.gte': timestamp.toString(),
          limit: '40',
          apiKey: apiKey,
          order: 'asc'
        });
        url = `${baseUrl}?${params.toString()}`;
      }

      const response = await axios.get(url, {
        headers: {
          'Accept': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching trades:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const tradesSlice = createSlice({
  name: 'trades',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    nextUrl: null,
  },
  reducers: {
    clearTrades: (state) => {
      state.items = [];
      state.nextUrl = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrades.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrades.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload.results);
        state.nextUrl = action.payload.next_url;
      })
      .addCase(fetchTrades.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearTrades } = tradesSlice.actions;
export default tradesSlice.reducer;