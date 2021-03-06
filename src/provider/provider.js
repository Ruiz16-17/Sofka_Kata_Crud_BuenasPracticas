import React, { useReducer } from "react";
import reducer from "../reducers/reducer";
import { initialState, Store } from "../store/store";

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    );
};