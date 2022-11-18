import { configureStore } from "@reduxjs/toolkit";

import articlesReducer from "./slices/articles";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
