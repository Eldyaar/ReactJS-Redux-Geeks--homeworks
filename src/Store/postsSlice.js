import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  return response.data.posts;
});

export const removePost = createAsyncThunk(
  "posts/removePost",
  async (postId) => {
    const response = await axios.delete(
      `https://dummyjson.com/posts/${postId}`
    );

    return postId;
  }
);

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const response = await axios.post("https://dummyjson.com/posts/add", post);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.postsData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(removePost.fulfilled, (state, { payload: postId }) => {
        state.postsData = state.postsData.filter((p) => p.id !== postId);
      })
      .addCase(addPost.fulfilled, (state, action) => {
        console.log(" successfully added post: ", action.payload);
        state.postsData.push(action.payload);
      })
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;
