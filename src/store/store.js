import { legacy_createStore as createStore } from "redux";
import reducers from "../reducers/favorites";

const store = createStore(reducers);

export default store;
