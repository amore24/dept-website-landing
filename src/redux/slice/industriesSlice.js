import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIndustries = createAsyncThunk("fetchIndustries", async (params) => {
    console.log(params);
    const res = await fetch(`http://localhost:8000/listingData`);
    return res?.json();
});

const industriesSlice = createSlice({
name: "industries",
initialState: {
    isLoading: false,
    data: [],
    isError: false
},
extraReducers: (builder) => {
    builder.addCase(fetchIndustries.pending, (state, action) => {
    state.isLoading = true;
    })
    builder.addCase(fetchIndustries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    })
    builder.addCase(fetchIndustries.rejected, (state, action) => {
        state.isError = true;
    })
}
});

export default industriesSlice.reducer;