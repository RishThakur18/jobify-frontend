import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import rootSaga from "./RootSaga";


const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga);

export default store;