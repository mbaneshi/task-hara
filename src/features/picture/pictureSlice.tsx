import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchPictures } from "./pictureAPI";
import myPictures from "../../types/Pictures";

export interface PicturesState {
  data: myPictures[];
  err: string | null;
  isloading: boolean;
  favoritePic: myPictures[];
}

const initialState: PicturesState = {
  data: [],
  err: null,
  isloading: false,
  favoritePic: [],
};

export const fetchPicAsync = createAsyncThunk(
  "picture/fetchPictures",
  async (url: string) => {
    const response = await fetchPictures(url);

    return response;
  }
);

export const picturesSlice = createSlice({
  name: "picture",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.err = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isloading = action.payload;
    },
    addToFavorite: (state, action) => {
      state.favoritePic.push(action.payload);
    },
    deleteFromStore: (state, action) => {
      console.log("🚀 ~ file: pictureSlice.tsx ~ line 45 ~ state", state);
      var deleteIndex = state.data.findIndex(
        (item) => Number(item.id) === Number(action.payload.id)
      );

      if (deleteIndex > 0) {
        state.data.splice(deleteIndex, 1);
        console.log("state.data.length", state.data.length);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPicAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchPicAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(fetchPicAsync.rejected, (state, action) => {
        state.isloading = false;
        state.err = action.payload as string;
      });
  },
});

export const {
  setData,
  setError,
  setIsLoading,
  deleteFromStore,
  addToFavorite,
} = picturesSlice.actions;

export const selectPicture = (state: RootState) => state.picture.data;

export default picturesSlice.reducer;
