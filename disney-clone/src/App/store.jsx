import { configureStore, getDefauleMiddleware } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {},
  middleware: getDefauleMiddleware({
    serializableCheck: false,
  }),
});
