import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Industry {
  id: number;
  name: string;
}

interface IndustriesState {
  isLoading: boolean;
  data: Industry[];
  isError: boolean;
}

const initialState: IndustriesState = {
  isLoading: false,
  data: [],
  isError: false,
};

type fetchIndustriesArgms = string | void;


export const fetchIndustries = createAsyncThunk<Industry[], fetchIndustriesArgms>(
  "industries/fetchIndustries",
  async (params, { rejectWithValue }) => {
    try {
      let res;
      if(params) {
        res = await fetch(`http://localhost:8000/listingData?${params}`);
      } else {
        res = await fetch(`http://localhost:8000/listingData`);
      }
      if (!res.ok) {
        throw new Error("Failed to fetch industries");
      }
      const data: Industry[] = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message);      
    }
  }
);


const industriesSlice = createSlice({
  name: "industries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIndustries.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchIndustries.fulfilled,
      (state, action: PayloadAction<Industry[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchIndustries.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});


export default industriesSlice.reducer;