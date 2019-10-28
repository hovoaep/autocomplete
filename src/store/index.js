import { createStore } from "redux";

import { user } from "../reducers";

const store = createStore(user);

export default store;
