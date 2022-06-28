import { combineReducers} from "redux";
import { legacy_createStore as createStore } from "redux";
import productsReducer from "./Modules/products/reducer";

const reducers = combineReducers({
  products: productsReducer,
});

const store = createStore(reducers);

export default store