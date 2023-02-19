import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';
import { rootWatcher } from './root-watcher';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false }), sagaMiddleware
    ],
});

sagaMiddleware.run(rootWatcher);
