import { configureStore } from "@reduxjs/toolkit";
import { dblApi } from "./api";

export default configureStore({
    reducer: {
        [dblApi.reducerPath]: dblApi.reducer
    },
    middleware: (gDm) => gDm().concat(dblApi.middleware) 
});